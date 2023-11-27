import './header';
import './scroll';
import { renderBasketProducts } from './renderBasketProducts';
import { validateInput } from './validateInput';
import { refs } from './refs';

// відмалювання товарів в корзині
renderBasketProducts();
// відмалювання товарів в корзині

//валідація форми
validateInput(refs.inputCartEl, refs.submitBtnCartEl);
