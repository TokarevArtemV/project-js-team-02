import './header';
import './scroll';
import { renderBasketProducts } from './renderBasketProducts';
import { validateInput } from './validateInput';
import { refs } from './refs';
import { countCartProducts } from './cartCount';
import { deleteAllProducts } from './deleteAll';


// відмалювання товарів в корзині
renderBasketProducts();

// кількість товарів в корзині
countCartProducts();

//валідація форми
validateInput(refs.inputCartEl, refs.submitBtnCartEl);
//слухач на кнопку видалити 
refs.deleteAllButton.addEventListener('click', deleteAllProducts);

// const basket = [
//   { _id: '640c2dd963a319ea671e383b', count: 1 },
//   { _id: '640c2dd963a319ea671e376e', count: 3 },
//   { _id: '640c2dd963a319ea671e3860', count: 4 },
//   { _id: '640c2dd963a319ea671e385e', count: 3 },
//   { _id: '640c2dd963a319ea671e376f', count: 2 },
//   { _id: '640c2dd963a319ea671e3770', count: 1 },
//   { _id: '640c2dd963a319ea671e3860', count: 1 },
// ];
// localStorage.setItem('BASKET', JSON.stringify(basket));