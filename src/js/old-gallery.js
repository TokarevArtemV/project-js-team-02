(() => {
  const refs = {
    openGallerry: document.querySelector('.bestsellers-list'),
    closeGalleryBtn: document.querySelector('.gallery-close-btn'),
    gallery: document.querySelector('.gallery'),
  };
  refs.openGallerry.addEventListener('click', toggleGallery);
  refs.closeGalleryBtn.addEventListener('click', toggleGallery);

  function toggleGallery() {
    refs.gallery.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
$('.carousel').flipster({
  style: 'carousel',
  spacin: -0.3,
});
