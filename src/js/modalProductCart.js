import { refs } from './refs';
import { GetProduct } from './products-api/api';
import { createMarkupModalProductCard } from './markup/createMarkupModalProductCard';
import { appendMarkup } from './markup/appendMarkup';
import { loadOn, loadOff } from './loadStateForLoader';

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
      evt.target.nodeName === 'use'
    )
      return;

    const idCard = evt.target.closest('.js-product-card');
    const dataCardID = idCard.dataset.id;

    loadOn();

    const getModalProduct = new GetProduct();

    getProductId();

    async function getProductId() {
      const objModal = await getModalProduct.getProductId(dataCardID);
      appendMarkup(refs.modal, createMarkupModalProductCard(objModal));
      document.querySelector('.js-modal-picture-onLoad').onload = () => {
        openModal();
        loadOff();
      };

      refs.modal.addEventListener('click', function (event) {
        if (
          event.target === refs.modal ||
          event.target.closest('.close-icon')
        ) {
          closeModal();
        }
      });
    }
  });
}

/* 
function openModal() {
  refs.modal.style.display = 'block';
}

function closeModal() {
  refs.modal.style.display = 'none';
}

export function modalProductCart() {
  refs.productCardsContainer.addEventListener('click', modalCartLoad);

  function modalCartLoad(e) {
    if (
      e.target.classList.contains('js-button-shopping') ||
      e.target.classList.contains('icon-shopping-card') ||
      e.target.nodeName === 'use'
    )
      return;
    const idCard = e.target.closest('.js-product-card');
    const dataCardID = idCard.dataset.id;

    if (idCard) {
      openModal();
    }
    const getModalProduct = new GetProduct();

    async function cartMarkup() {
      const objModal = await getModalProduct.getProductId(dataCardID);
      appendMarkup(refs.modal, createMarkupModalProductCard(objModal));
      const cartModalBtn = document.querySelector('.js-modal-btn');
      console.log(cartModalBtn);
      return cartModalBtn;
    }

    cartMarkup();
  }
} */
