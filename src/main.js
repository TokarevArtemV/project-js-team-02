import '../node_modules/slim-select/dist/slimselect.css';
import './js/header.js';
import './js/popularProducts.js';
import './js/discountProducts.js';
import { modalProductCart } from './js/modalProductCart';
import './js/subscription.js';
import { refs } from './js/refs';
import { loadPage } from './js/select.js';
import { getProductsFromServer } from './js/loadProduct.js';
import { getProductSearch } from './js/search.js';

// відмалювання по отриманим категоріям селекта1 при запуску сторінки
loadPage();
// відмалювання продуктів при старті сторінки і запис параметрів в лок. схов.
getProductsFromServer();

//пошук по кнопці батон
refs.searchForm.addEventListener('submit', getProductSearch);

// зміна іконки корзини
import './js/addItemToBasketChangeIcon.js';
// зміна іконки корзини

// пагінація
import { onLoadContent } from './js/loadContent';

refs.pagesRibbonEL.addEventListener('click', onLoadContent);
// пагінація
modalProductCart();
