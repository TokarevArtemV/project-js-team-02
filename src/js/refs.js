export const refs = {
  productCardsContainer: document.querySelector('.home_product-card-container'),
  popularCardsContainer: document.querySelector('.popular-products-container'),
  discountCardsContainer: document.querySelector(
    '.discount-products-container'
  ),
  //footer
  footerSubmitBtnEl: document.querySelector('.footer-form-btn'),
  footerInputEl: document.querySelector('.footer-input'),
  footerBackdropEl: document.querySelector('[data-modal-footer]'),
  footerModalEl: document.querySelector('.footer-modal'),
  footerModalBtnCloseEl: document.querySelector('[ data-modal-close]'),
  footerFormEl: document.querySelector('.footer-form'),
  //
  popularProdEl: document.querySelector('.popular-products-list'),
  discountProdEl: document.querySelector('.discount-products-list'),

  //filters(пошук+селект1)
  searchForm: document.querySelector('.home__form-search'),
  searchElCategories: document.getElementById('searchParams1'),

  // зміна іконки корзини
  prodEl: document.querySelector('.js-product-card'),
  buttonShopping: document.querySelector('.js-button-shopping'),
  // зміна іконки корзини

  productFormBasket: document.querySelector('.flex-cart-js'),

  //видалення всіх товарів з корзини
  deleteAllButton: document.querySelector('.delete-all-button'),
  cartContent: document.querySelector('.js-cart-content'),
  cartNumber: document.querySelector('.js-cart-number'),

  //cart valiidation,
  //cart subscription
  inputCartEl: document.querySelector('.js-cart-email'),
  submitBtnCartEl: document.querySelector('.js-submit-btn-cart'),
  //cart amount sum
  sumCartEl: document.querySelector('.sum-span'),
  //cart empty
  emptyBasketBoxEl: document.querySelector('.empty-cart-content-js'),
  fullBasketBoxEl: document.querySelector('.cart-wrapper-js'),
  //cart modal
  cartBackdropEl: document.querySelector('[data-modal-cart]'),
  cartModalCloseBtn: document.querySelector('[data-modal-close-cart]'),
  cartModalEl: document.querySelector('.cart-modal'),
  cartFormEl: document.querySelector('.cart-form'),
  // catTitleNumEl: document.querySelector('#cartTitle'),

  //pagination
  pagesRibbonEL: document.querySelector('.pag-ribbon'),

  //Modal
  cards: document.querySelectorAll('.js-product-card'),
  modal: document.querySelector('[ data-modal ]'),
  // Loader
  modalWindowEl: document.querySelector('.hystmodal'),
};
