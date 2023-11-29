import icon from '../images/icons/icons.svg';
import { productsInBasket } from './getProductFormBasket';
import { saveProductsToBasket } from './saveSerchParamsToLocStg';
import { countCartProducts } from './cartCount';

export function addProductInBasket(evt) {
  evt.preventDefault();

  const basketArr = productsInBasket() || [];

  if (!evt.target.closest('.js-button-shopping')) return;

  const product = createProductObj(evt.target);

  basketArr.push(product);

  saveProductsToBasket(basketArr);

  let productCard = evt.target.closest('.js-button-shopping');
  const useEl = productCard.lastElementChild.lastElementChild;
  useEl.setAttribute('href', `${icon}#icon-checkbox`);
  productCard.classList.add('js-button-disabled');
  countCartProducts();
}

function createProductObj(element) {
  const count = 1;

  const productId = element.closest('.js-product-card');
  const cardId = productId.dataset.id;
  const product = { _id: cardId, count: count };

  return product;
}
