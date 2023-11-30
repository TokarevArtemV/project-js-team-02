import './scroll';
import { renderBasketProducts } from './renderBasketProducts';
import { validateInput } from './validateInput';
import { refs } from './refs';

import { loadOn } from './loadStateForLoader';
// import './deleteBasketProductCard';
import { deleteBasketProductCards } from './deleteBasketProductCard';
import throttle from 'lodash.throttle';
import { deleteAllProducts } from './deleteAll';
import { toggleCartMarkup } from './toggleEmptyCart';
import { createOrder } from './createOrder';

//запуск лоадера
loadOn();

// відмалювання товарів в корзині
renderBasketProducts();

//валідація форми
validateInput(refs.inputCartEl, refs.submitBtnCartEl);

//закриття продуктових карток натисканням на кнопку
refs.productFormBasket.addEventListener(
  'click',
  throttle(deleteBasketProductCards, 1000)
);

//слухач на кнопку видалити
refs.deleteAllButton.addEventListener('click', deleteAllProducts);

//пуста повна корзина
toggleCartMarkup();

//submit order
createOrder();
