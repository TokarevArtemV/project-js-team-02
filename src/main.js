import '../node_modules/slim-select/dist/slimselect.css';
// import './js/popularProducts.js';

import './js/scroll.js';
// import './js/cartCount.js';
import './js/subscription.js';
import { getDiscountProducts } from './js/discountProducts.js';
import { refs } from './js/refs';
import { loadPage } from './js/select.js';
import { getProductSearch } from './js/search.js';
import { getPopularProducts } from './js/popularProducts.js';
import { modalProductCart } from './js/modalProductCart';
import { modalPopularProductCart } from './js/modalPopularProductCart';
import { modalDiscountProductCart } from './js/modalDiscountProductCart';
import { countCartProducts } from './js/cartCount.js';
import { updateLocStor } from './js/search.js';
import { onLoadContent } from './js/loadContent';
import { addProductInBasket } from './js/addProductToBasket';
import { addPopularProductInBasket } from './js/addPopularToBasket';
import { addDiscountProductInBasket } from './js/addDiscountToBasket';

// відмалювання по отриманим категоріям селекта1 при запуску сторінки
loadPage();

//  оновлення запису в локальном сховищі
updateLocStor();

//  відмалювання дисконтних товарів
getDiscountProducts();

//  відмалювання популярних товарів
getPopularProducts();

//пошук по кнопці батон
refs.searchForm.addEventListener('submit', getProductSearch);

// слухач на додавання до корзини товарів
refs.productCardsContainer.addEventListener('click', addProductInBasket);

// слухач на додавання до корзини популярних товарів
refs.popularCardsContainer.addEventListener('click', addPopularProductInBasket);

// слухач на додавання до корзини дисконтних товарів
refs.discountCardsContainer.addEventListener(
  'click',
  addDiscountProductInBasket
);

// пагінація
refs.pagesRibbonEL.addEventListener('click', onLoadContent);

// слухачь на картки товарів для модального вікна
modalProductCart();

// слухачь на картки дисконтних товарів для модального вікна
modalDiscountProductCart();

// слухачь на картки популярних товарів для модального вікна
modalPopularProductCart();

// підрахунок кількості товарів в корзині
countCartProducts();
