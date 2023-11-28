import './header';
import './scroll';
import { renderBasketProducts } from './renderBasketProducts';
import { validateInput } from './validateInput';
import { refs } from './refs';
import { countCartProducts } from './cartCount';
import { cartItemCounter } from './cartItemCounter';

// відмалювання товарів в корзині
renderBasketProducts();

// кількість товарів в корзині
countCartProducts();

//валідація форми
validateInput(refs.inputCartEl, refs.submitBtnCartEl);

//лічильник
cartItemCounter();
