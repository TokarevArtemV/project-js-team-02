import { refs } from './refs';
import { GetProduct } from './products-api/api';
import { createMarkupModalProductCard } from './markup/createMarkupModalProductCard';
import { appendMarkup } from './markup/appendMarkup';

export function modalProductCart() {
  function openModal() {
    refs.modal.style.display = 'block';
  }

  function closeModal() {
    refs.modal.style.display = 'none';
  }

  refs.productCardsContainer.addEventListener('click', evt => {
    if (
      evt.target.classList.contains('js-button-shopping') ||
      evt.target.classList.contains('icon-shopping-card') ||
      evt.target.classList.contains('icon-shopping-card')
    )
      return;

    const idCard = evt.target.closest('.js-product-card');
    const dataCardID = idCard.dataset.id;

    if (idCard) {
      openModal();
    }
    const getModalProduct = new GetProduct();

    async function getProductId() {
      const objModal = await getModalProduct.getProductId(dataCardID);
      appendMarkup(refs.modal, createMarkupModalProductCard(objModal));
    }

    getProductId().then(() => {
      if (refs.modal) {
        refs.modal.addEventListener('click', function (event) {
          if (event.target === refs.modal) {
            closeModal();
          }

          const closeIcon = event.target.closest('.close-icon');
          if (closeIcon) {
            closeModal();
          }
        });
      }
    });
  });
}
