import icon from '../images/icons/icons.svg';

import { refs } from './refs';

const KEY_BASKET = 'BASKET';
const basketArr = JSON.parse(localStorage.getItem(KEY_BASKET)) ?? [];

refs.productCardsContainer.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();

  if (
    evt.target.classList.contains('js-button-shopping') ||
    evt.target.classList.contains('icon-shopping-card') ||
    evt.target.nodeName === 'use'
  ) {
    const product = createProductObj(evt.target);

    const inStorage = basketArr.some(({ _id }) => _id === product._id);

    if (inStorage) {
      return;
    } 

    basketArr.push(product);

    localStorage.setItem(KEY_BASKET, JSON.stringify(basketArr));
    
    let use = evt.target;
    
    if (evt.target.nodeName.toLowerCase() === 'button' || evt.target.nodeName.toLowerCase() === 'svg') {
      use = evt.target.querySelector('use');
    }
    use.setAttribute('href', `${icon}#icon-checkbox`);
    use.closest('.js-button-shopping').classList.add('button-disabled');
  }
}

let count = 1;

function createProductObj(element) {
  const productId = element.closest('.js-product-card');
  let cardId = productId.dataset.id;
  let product = {'_id': cardId, 'count': count};

  return product;

}
