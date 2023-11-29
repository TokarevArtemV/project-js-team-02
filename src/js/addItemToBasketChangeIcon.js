import icon from '../images/icons/icons.svg';
import { productsInBasket } from './getProductFormBasket';
import { saveProductsToBasket } from './saveSerchParamsToLocStg';
import { countCartProducts } from './cartCount';

export function addProductInBasket(evt) {
  evt.preventDefault();

  if (
    evt.target.closest('.js-button-shopping') &&
    !evt.target
      .closest('.js-product-card')
      .classList.contains('js-button-disabled')
  ) {
    const basketArr = productsInBasket() || [];
    const product = createProductObj(evt.target);

    basketArr.push(product);

    saveProductsToBasket(basketArr);

    const productCard = evt.target.closest('.js-product-card');
    const useEl = document.querySelector(
      '.icon-shopping-card'
    ).firstElementChild;

    useEl.setAttribute('href', `${icon}#icon-checkbox`);
    console.log(useEl);
    productCard.classList.add('js-button-disabled');
    countCartProducts();
  }
}

function createProductObj(element) {
  const count = 1;

  const productId = element.closest('.js-product-card');
  const cardId = productId.dataset.id;
  const product = { _id: cardId, count: count };

  return product;
}
