import './js/variables/variables.js';
import '../node_modules/slim-select/dist/slimselect.css';
import './js/scroll.js';
import './js/subscription.js';
import { refs } from './js/refs';
import { createSelectCategories, createSortCategories } from './js/select.js';
import { getProductSearch } from './js/search.js';
import { createPopularProductsCards } from './js/create-products-card/createPopularProductsCards.js';
import { createDiscountProductsCards } from './js/create-products-card/createDiscountProductsCards.js';
import { modalProductCart } from './js/openModalForCard/modalProductCart';
import { countCartProducts } from './js/countCartProducts.js';
import { updateLocStor } from './js/search.js';
import { onLoadContent } from './js/loadContent';
import { addProductInBasket } from './js/add-products-to-basket/addProductToBasket.js';
import { loadOn, loadOff } from './js/loadStateForLoader';
import { createProductsCards } from './js/create-products-card/createProductsCards.js';
import { validateInput } from './js/validateInput.js';
import { onSubmitSubscription } from './js/subscription.js';

// підрахунок кількості товарів в корзині
countCartProducts();

// активація лоадера
loadOn();

// відмалювання по отриманим категоріям селекта категорій при запуску сторінки
createSelectCategories();

// відмалювання селекта сортування при запуску сторінки
createSortCategories();

//  оновлення запису в локальном сховищі
updateLocStor();

//  відмалювання карток товарів
createProductsCards();

//  відмалювання дисконтних товарів
createDiscountProductsCards();

//  відмалювання популярних товарів
createPopularProductsCards();

//пошук по кнопці "Search" форми пошуку
refs.searchForm.addEventListener('submit', getProductSearch);

// слухач на додавання продуктів до корзини товарів
refs.productsContainer.addEventListener('click', addProductInBasket);

// пагінація
refs.pagesRibbonEL.addEventListener('click', onLoadContent);

// слухачь на картки товарів для модального вікна
refs.productsContainer.addEventListener('click', modalProductCart);

// ------------------------------валідація форми
refs.footerSubmitBtnEl.disabled = true;
validateInput(refs.footerInputEl, refs.footerSubmitBtnEl);

// слухач на кнопку сабміт форми підписки
refs.footerSubmitBtnEl.addEventListener('click', onSubmitSubscription);
