import './js/scroll';
import throttle from 'lodash.throttle';
import { renderBasketProducts } from './js/renderBasketProducts';
import { validateInput } from './js/validateInput';
import { refs } from './js/refs';
import { loadOn } from './js/loadStateForLoader';
import { deleteProductFromBasket } from './js/deleteProductFromBasket';
import { deleteAllProducts } from './js/deleteAllProducts';
import { toggleCartMarkup } from './js/toggleEmptyCart';
import { createOrder } from './js/createOrder';

//запуск лоадера
loadOn();

// відмалювання товарів в корзині
renderBasketProducts();

//валідація форми
validateInput(refs.inputCartEl, refs.submitBtnCartEl);

//закриття продуктових карток натисканням на кнопку
refs.productFormBasket.addEventListener(
  'click',
  throttle(deleteProductFromBasket, 1000)
);

//слухач на кнопку видалити
refs.deleteAllButton.addEventListener('click', deleteAllProducts);

//пуста повна корзина
toggleCartMarkup();

//submit order
createOrder();
