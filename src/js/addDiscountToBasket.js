import icon from '../images/icons/icons.svg';
import { productsInBasket } from './getProductFormBasket';
import { saveProductsToBasket } from './saveSerchParamsToLocStg';
import { getPopularProducts } from './popularProducts';
import { getDiscountProducts } from './discountProducts';
import { loadOn } from './loadStateForLoader';
import { getProductsFromServer } from './loadProduct';
import { countCartProducts } from './cartCount';

export function addDiscountProductInBasket(evt) {
  evt.preventDefault();

  if (
    evt.target.closest('.js-button-discount') &&
    !evt.target
      .closest('.js-discount-card')
      .classList.contains('js-button-disabled')
  ) {
    const basketArr = productsInBasket() || [];
    const product = createProductObj(evt.target);

    basketArr.push(product);
    saveProductsToBasket(basketArr);

    setTimeout;
    const productCard = evt.target.closest('.js-discount-card');

    let use = evt.target;

    if (
      evt.target.nodeName.toLowerCase() === 'button' ||
      evt.target.nodeName.toLowerCase() === 'svg'
    ) {
      use = evt.target.querySelector('use');
    }

    use.setAttribute('href', `${icon}#icon-checkbox`);
    use.closest('.js-button-discount').classList.add('button-disabled');

    productCard.classList.add('js-button-disabled');

    //  оновлення іконок всіх товарів
    loadOn();
    getProductsFromServer();
    getPopularProducts();
    getDiscountProducts();
    countCartProducts();
  }
}

function createProductObj(element) {
  const amount = 1;

  const productId = element.closest('.js-discount-card');
  const cardId = productId.dataset.id;
  const product = { _id: cardId, amount: amount };
  return product;
}
