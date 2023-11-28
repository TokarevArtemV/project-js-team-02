import '../node_modules/slim-select/dist/slimselect.css';
import './js/header.js';
import './js/popularProducts.js';
import './js/discountProducts.js';
import './js/scroll.js';
import './js/cartCount.js';
import './js/subscription.js';
import { refs } from './js/refs';
import { loadPage } from './js/select.js';
import { getProductSearch } from './js/search.js';
import { modalProductCart } from './js/modalProductCart';
import { countCartProducts } from './js/cartCount.js';
import { updateLocStor } from './js/search.js';
import { onLoadContent } from './js/loadContent';

// відмалювання по отриманим категоріям селекта1 при запуску сторінки
loadPage();
//  оновлення запису в локальном сховищі
updateLocStor();

//пошук по кнопці батон
refs.searchForm.addEventListener('submit', getProductSearch);

// зміна іконки корзини
// import './js/addItemToBasketChangeIcon.js';

// пагінація
refs.pagesRibbonEL.addEventListener('click', onLoadContent);

// слухачь на картки товарів для модального вікна
modalProductCart();

// підрахунок кількості товарів в корзині
countCartProducts();
