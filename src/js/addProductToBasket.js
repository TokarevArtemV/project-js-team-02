import icon from '../images/icons/icons.svg';
import { productsInBasket } from './getProductFormBasket';
import { saveProductsToBasket } from './saveSerchParamsToLocStg';
import { countCartProducts } from './cartCount';
import { getPopularProducts } from './popularProducts';
import { getDiscountProducts } from './discountProducts';
import { loadOn } from './loadStateForLoader';
import { getProductsFromServer } from './loadProduct';

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

    let use = evt.target;

    if (
      evt.target.nodeName.toLowerCase() === 'button' ||
      evt.target.nodeName.toLowerCase() === 'svg'
    ) {
      use = evt.target.querySelector('use');
    }

    use.setAttribute('href', `${icon}#icon-checkbox`);
    use.closest('.js-button-shopping').classList.add('button-disabled');

    productCard.classList.add('js-button-disabled');

    //  оновлення іконок всіх товарів
    loadOn();
    getProductsFromServer();
    getDiscountProducts();
    getPopularProducts();
    countCartProducts();
  }
}

function createProductObj(element) {
  const amount = 1;

  const productId = element.closest('.js-product-card');
  const cardId = productId.dataset.id;
  const product = { _id: cardId, amount: amount };

  return product;
}
