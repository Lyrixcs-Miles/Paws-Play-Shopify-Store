(() => {
  const controllers = new WeakMap();
  document.addEventListener('click', event => {
    const toggle = event.target.closest('[data-menu-toggle]');
    if (toggle) {
      const menu = document.getElementById(toggle.getAttribute('aria-controls'));
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? '×' : '☰';
    }
    const step = event.target.closest('[data-quote-step]');
    if (step) {
      const group = step.closest('[data-testimonials]');
      const slides = Array.from(group.querySelectorAll('.quote-slide'));
      const current = Math.max(0, slides.findIndex(slide => !slide.hidden));
      const next = (current + Number(step.dataset.quoteStep) + slides.length) % slides.length;
      slides.forEach((slide, index) => { slide.hidden = index !== next; });
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    document.querySelectorAll('.dropdown[open]').forEach(dropdown => { dropdown.open = false; });
    document.querySelectorAll('[data-menu-toggle][aria-expanded="true"]').forEach(toggle => {
      toggle.click();
      toggle.focus();
    });
  });
  function selectionURL(form) {
    const url = new URL(form.action, window.location.origin);
    url.searchParams.set('option_values', Array.from(form.querySelectorAll('[data-option-select]'), select => select.value).join(','));
    return url;
  }
  async function updateVariant(form) {
    const container = form.closest('[data-product-section]');
    const previous = controllers.get(container);
    if (previous) previous.abort();
    const controller = new AbortController();
    controllers.set(container, controller);
    const selectedIndex = Array.from(form.querySelectorAll('[data-option-select]')).findIndex(select => select === document.activeElement);
    const url = selectionURL(form);
    const linkedProduct = Array.from(form.querySelectorAll('[data-option-select]'))
      .find(select => select === document.activeElement)?.selectedOptions[0]?.dataset.productUrl;
    if (linkedProduct && new URL(linkedProduct, window.location.origin).pathname !== window.location.pathname) {
      window.location.assign(linkedProduct);
      return;
    }
    const renderURL = new URL(url);
    renderURL.searchParams.set('section_id', container.dataset.productSection);
    container.setAttribute('aria-busy', 'true');
    container.querySelectorAll('.product-form button[type="submit"]').forEach(button => { button.disabled = true; });
    try {
      const response = await fetch(renderURL, {signal: controller.signal});
      if (!response.ok) throw new Error('Variant render failed');
      const doc = new DOMParser().parseFromString(await response.text(), 'text/html');
      const replacement = doc.getElementById(container.id);
      if (!replacement) throw new Error('Product section not found');
      container.replaceWith(replacement);
      window.history.replaceState({}, '', url);
      replacement.querySelectorAll('[data-option-select]')[selectedIndex]?.focus();
    } catch (error) {
      if (error.name !== 'AbortError') window.location.assign(url);
    } finally {
      container.removeAttribute('aria-busy');
    }
  }
  document.addEventListener('change', event => {
    if (event.target.matches('[data-option-select]')) updateVariant(event.target.form);
  });
  document.addEventListener('submit', event => {
    if (event.target.matches('[data-variant-form]')) {
      event.preventDefault();
      updateVariant(event.target);
    }
  });
  document.addEventListener('shopify:block:select', event => {
    const slide = event.target.closest('.quote-slide');
    if (!slide) return;
    slide.closest('[data-testimonials]').querySelectorAll('.quote-slide').forEach(item => { item.hidden = item !== slide; });
  });
  async function loadRecommendations(element) {
    if (element.dataset.loaded) return;
    element.dataset.loaded = 'true';
    try {
      const response = await fetch(element.dataset.recommendations);
      if (!response.ok) return;
      const doc = new DOMParser().parseFromString(await response.text(), 'text/html');
      const replacement = doc.querySelector('[data-recommendations]');
      if (replacement && !replacement.hidden) element.replaceWith(replacement);
    } catch {
      element.hidden = true;
    }
  }
  function initializeRecommendations(scope) {
    scope.querySelectorAll('[data-recommendations]').forEach(loadRecommendations);
  }
  initializeRecommendations(document);
  document.addEventListener('shopify:section:load', event => initializeRecommendations(event.target));
})();
