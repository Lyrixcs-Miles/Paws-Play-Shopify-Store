(() => {
  document.addEventListener('click', event => {
    const button = event.target.closest('[data-quote-step]');
    if (!button) return;
    const group = button.closest('[data-testimonials]');
    if (!group) return;
    const slides = Array.from(group.querySelectorAll('.pp-quote-slide'));
    if (!slides.length) return;
    const current = Math.max(0, slides.findIndex(slide => !slide.hidden));
    const next = (current + Number(button.dataset.quoteStep) + slides.length) % slides.length;
    slides.forEach((slide, index) => { slide.hidden = index !== next; });
  });
  document.addEventListener('shopify:block:select', event => {
    const slide = event.target.closest('.pp-quote-slide');
    if (!slide) return;
    slide.closest('[data-testimonials]').querySelectorAll('.pp-quote-slide').forEach(item => { item.hidden = item !== slide; });
  });
})();
