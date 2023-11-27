import { refs } from './refs';

const KEY_BUSKET = 'BUSKET';
const busketArr = JSON.parse(localStorage.getItem(KEY_BUSKET)) ?? [];

refs.productCardsContainer.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();

  if (
    evt.target.classList.contains('js-button-shopping') ||
    evt.target.classList.contains('icon-shopping-card') ||
    evt.target.nodeName === 'use'
  ) {
    // debugger;
    const product = findProduct(evt.target);
    const inStorage = busketArr.some(({ _id }) => _id === product._id);

    if (inStorage) {
      //     const changeIcon = function (icon) {
      //         icon.classList.replace();
      //     }
      return;
    }

    busketArr.push(product);
    localStorage.setItem(KEY_BUSKET, JSON.stringify(busketArr));
  }
}

function findProduct(element) {
  const productId = element.closest('.js-product-card');
  const cardId = productId.dataset.id;
  // return results.find(({ _id }) => _id === productId);
}
// console.log(_id);
