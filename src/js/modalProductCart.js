import { refs } from './refs';
import { GetProduct } from './products-api/api';
import { createMarkupModalProductCard } from './markup/createMarkupModalProductCard';
import { appendMarkup } from './markup/appendMarkup';
import { loadOn, loadOff } from './loadStateForLoader';
import { getProductsFromServer } from './loadProduct';
import { getPopularProducts } from './popularProducts';
import { getDiscountProducts } from './discountProducts';
import { countCartProducts } from './cartCount';

const KEY_BASKET = 'BASKET';

function checkBasket() {
  const basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];
  return basketArr;
}

export function modalProductCart() {
  let dataCardID;
  refs.productCardsContainer.addEventListener('click', evt => {
    if (!!evt.target.classList.contains('home_product-card-container')) return;
    if (!!evt.target.closest('.js-button-shopping')) return;

    const idCard = evt.target.closest('.js-product-card');
    dataCardID = idCard.dataset.id;
    //оновлення сторінки
    loadOn();
    getProductId();

    async function getProductId() {
      const getModalProduct = new GetProduct();
      const objModal = await getModalProduct.getProductId(dataCardID);
      appendMarkup(refs.modal, createMarkupModalProductCard(objModal));
      const addToCartBtnEl = document.querySelector('.add-to-cart-btn');
      const removefromCartBtnEl = document.querySelector(
        '.remove-from-cart-btn'
      );
      document.querySelector('.js-modal-picture-onLoad').onload = () => {
        openModal();
        loadOff();
      };
      if (productInLocalStorage(checkBasket(), dataCardID)) {
        addToCartBtnEl.classList.toggle('visually-hidden');
        removefromCartBtnEl.classList.toggle('visually-hidden');
      }
    }

    refs.modal.addEventListener('click', modalProductsBtnHandler);
  });

  function openModal() {
    refs.modal.style.display = 'block';
  }

  function closeModal() {
    refs.modal.style.display = 'none';

    refs.modal.removeEventListener('click', modalProductsBtnHandler);
  }

  let amount = 1;

  function modalProductsBtnHandler(e) {
    const addToCartBtnEl = document.querySelector('.add-to-cart-btn');
    const removefromCartBtnEl = document.querySelector('.remove-from-cart-btn');
    const basketArr = checkBasket();
    if (e.target === refs.modal || e.target.closest('.close-icon')) {
      closeModal();
    }
    if (e.target === addToCartBtnEl) {
      let cardId = dataCardID;
      let product = { _id: cardId, amount: amount };
      basketArr.push(product);
      localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr));

      addToCartBtnEl.classList.toggle('visually-hidden');
      removefromCartBtnEl.classList.toggle('visually-hidden');
      //  оновлення іконок всіх товарів
      loadOn();
      getProductsFromServer();
      getPopularProducts();
      getDiscountProducts();
      countCartProducts();
    }
    if (e.target === removefromCartBtnEl) {
      const updateStorageArr = basketArr.filter(item => item._id != dataCardID);
      localStorage.setItem(KEY_BASKET, JSON.stringify(updateStorageArr));
      addToCartBtnEl.classList.toggle('visually-hidden');
      removefromCartBtnEl.classList.toggle('visually-hidden');
      //  оновлення іконок всіх товарів
      loadOn();
      getProductsFromServer();
      getPopularProducts();
      getDiscountProducts();
      countCartProducts();
    }
  }

  function productInLocalStorage(storageArr, product_id) {
    return storageArr.some(({ _id }) => _id === product_id);
  }
}
