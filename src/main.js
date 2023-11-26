import '../node_modules/slim-select/dist/slimselect.css';
import './js/header.js';
import { loadPage } from './js/select.js';
import { getProductsFromServer } from './js/loadProduct.js';
import './js/popularProducts.js';
import './js/discountProducts.js';
import { modalProductCart } from './js/modalProductCart';
import './js/subscription.js';
import { getProductSearch } from './js/search.js';

import { refs } from './js/refs';
import { onLoadContent } from './js/loadContent';
// import './js/pagination.js';
// import './js/loadContent.js';

// відмалювання по отриманим категоріям селекта при запуску сторінки
loadPage();
// відмалювання продуктів при старті сторінки і запис параметрів в лок. схов.
getProductsFromServer();

//пошук по кнопці батон
refs.searchForm.addEventListener('submit', getProductSearch);

refs.pagesRibbonEL.addEventListener('click', onLoadContent);

modalProductCart();
