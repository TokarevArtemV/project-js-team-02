import { refs } from '../refs';
import { GetProduct } from '../products-api/api';
import { createMarkupModalProductCard } from '../markup/createMarkupModalProductCard';
import { appendMarkup } from '../markup/appendMarkup';
import { loadOn, loadOff } from '../loadStateForLoader';
import { countCartProducts } from '../countCartProducts';
import { BASKET_KEY } from '../variables/variables';
import { getFromLocalStg, setToLocalStg } from '../local-storadge/localstorage';
import { changeIcons } from '../changeIcons';
import { createProductObj } from '../add-products-to-basket/addProductToBasket';

export async function modalProductCart(evt) {
  if (!!evt.target.closest('.js-product-card')) {
    if (!!evt.target.closest('.js-button-shopping')) return;

    const idCard = evt.target.closest('.js-product-card');
    const dataCardID = idCard.dataset.id;

    //оновлення сторінки
    loadOn();

    const getModalProduct = new GetProduct();
    const objProduct = await getModalProduct.getProductId(dataCardID);
    appendMarkup(refs.modal, createMarkupModalProductCard(objProduct));

    const addToCartBtnEl = document.querySelector('.add-to-cart-btn');

    const removefromCartBtnEl = document.querySelector('.remove-from-cart-btn');

    document.querySelector('.js-modal-picture-onLoad').onload = () => {
      refs.modal.style.display = 'block';
      loadOff();
    };

    if (productInLocalStorage(checkBasket(), dataCardID)) {
      addToCartBtnEl.classList.toggle('visually-hidden');
      removefromCartBtnEl.classList.toggle('visually-hidden');
    }

    refs.modal.addEventListener('click', modalProductsBtnHandler);

    async function modalProductsBtnHandler(e) {
      const addToCartBtnEl = document.querySelector('.add-to-cart-btn');
      const removefromCartBtnEl = document.querySelector(
        '.remove-from-cart-btn'
      );
      const basketArr = checkBasket();
      if (e.target === refs.modal || e.target.closest('.close-icon')) {
        refs.modal.style.display = 'none';

        refs.modal.removeEventListener('click', modalProductsBtnHandler);
      }
      if (e.target === addToCartBtnEl) {
        let cardId = dataCardID;
        let product = await createProductObj(evt.target);

        const productToBasket = { ...product, amount: 1 };
        basketArr.push(productToBasket);
        setToLocalStg(BASKET_KEY, basketArr);

        addToCartBtnEl.classList.toggle('visually-hidden');
        removefromCartBtnEl.classList.toggle('visually-hidden');

        //  оновлення іконок всіх товарів
        changeIcons(cardId);
        countCartProducts();
      }
      if (e.target === removefromCartBtnEl) {
        let cardId = dataCardID;
        const updateStorageArr = basketArr.filter(
          item => item.product._id !== dataCardID
        );
        setToLocalStg(BASKET_KEY, updateStorageArr);
        addToCartBtnEl.classList.toggle('visually-hidden');
        removefromCartBtnEl.classList.toggle('visually-hidden');

        //  оновлення іконок всіх товарів
        changeIcons(cardId);
        countCartProducts();
      }
    }
  }
}

function checkBasket() {
  const basketArr = getFromLocalStg(BASKET_KEY) || [];
  return basketArr;
}

function productInLocalStorage(storageArr, product_id) {
  return storageArr.some(({ product: { _id } }) => _id === product_id);
}
