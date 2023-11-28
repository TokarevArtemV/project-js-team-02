import './header';
import './scroll';
import { renderBasketProducts } from './renderBasketProducts';
import { validateInput } from './validateInput';
import { refs } from './refs';
import { countCartProducts } from './cartCount';
import './deleteBasketProductCard';
import { deleteBasketProductCards } from './deleteBasketProductCard';
import throttle from 'lodash.throttle';

// відмалювання товарів в корзині
renderBasketProducts();

// кількість товарів в корзині
countCartProducts();

//валідація форми
validateInput(refs.inputCartEl, refs.submitBtnCartEl);

//закриття продуктових карток натисканням на кнопку
refs.productFormBasket.addEventListener(
  'click',
  throttle(deleteBasketProductCards, 1000)
);
