import '../node_modules/slim-select/dist/slimselect.css';
import './js/header.js';
import './js/select.js';
import './js/loadProduct.js';
import './js/popularProducts.js';
import './js/discountProducts.js';
import { modalProductCart } from './js/modalProductCart';
import './js/subscription.js';
import { refs } from './js/refs';

// зміна іконки корзини
import './js/addItemToBasketChangeIcon.js';
// зміна іконки корзини

// пагінація
import { onLoadContent } from './js/loadContent';

refs.pagesRibbonEL.addEventListener('click', onLoadContent);
// пагінація
modalProductCart();
