import icon from '../images/icons/icons.svg';
import { productsInBasket } from './getProductFormBasket';
import { saveProductsToBasket } from './saveSerchParamsToLocStg';
import { getPopularProducts } from './popularProducts';
import { loadOn } from './loadStateForLoader';
import { getProductsFromServer } from './loadProduct';
import { getDiscountProducts } from './discountProducts';

export function addPopularProductInBasket(evt) {
  evt.preventDefault();

  if (
    evt.target.closest('.js-button-popular') &&
    !evt.target
      .closest('.js-popular-card')
      .classList.contains('js-button-disabled')
  ) {
    const basketArr = productsInBasket() || [];
    const product = createProductObj(evt.target);

    basketArr.push(product);
    saveProductsToBasket(basketArr);

    setTimeout;
    const productCard = evt.target.closest('.js-popular-card');

    let use = evt.target;

    if (
      evt.target.nodeName.toLowerCase() === 'button' ||
      evt.target.nodeName.toLowerCase() === 'svg'
    ) {
      use = evt.target.querySelector('use');
    }

    use.setAttribute('href', `${icon}#icon-checkbox`);
    use.closest('.js-button-popular').classList.add('button-disabled');

    productCard.classList.add('js-button-disabled');

    //  відмалювання популярних товарів
    loadOn();
    getProductsFromServer();
    getPopularProducts();
    getDiscountProducts();
  }
}

function createProductObj(element) {
  const count = 1;

  const productId = element.closest('.js-popular-card');
  const cardId = productId.dataset.id;
  const product = { _id: cardId, count: count };
  console.log(productId.dataset.id);
  return product;
}
