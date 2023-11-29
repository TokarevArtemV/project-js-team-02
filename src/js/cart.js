import './header';
import './scroll';
import { renderBasketProducts } from './renderBasketProducts';
import { validateInput } from './validateInput';
import { refs } from './refs';
import { countCartProducts } from './cartCount';
import { cartItemCounter } from './cartItemCounter';
import { loadOn } from './loadStateForLoader';
import './deleteBasketProductCard';
import { deleteBasketProductCards } from './deleteBasketProductCard';
import throttle from 'lodash.throttle';
import { deleteAllProducts } from './deleteAll';

//запуск лоадера
loadOn();

// відмалювання товарів в корзині
renderBasketProducts();

// кількість товарів в корзині
countCartProducts();

//валідація форми
validateInput(refs.inputCartEl, refs.submitBtnCartEl);

//лічильник
cartItemCounter();

//закриття продуктових карток натисканням на кнопку
refs.productFormBasket.addEventListener(
  'click',
  throttle(deleteBasketProductCards, 1000)
);

//слухач на кнопку видалити
refs.deleteAllButton.addEventListener('click', deleteAllProducts);
