import { refs } from './refs';
import { GetProduct } from './products-api/api';
import { validateInput } from './validateInput';

import { deleteAllProducts } from './deleteAll';

export function createOrder() {
  refs.submitBtnCartEl.addEventListener('click', onSubmit);
  refs.submitBtnCartEl.disabled = true;
  validateInput(refs.inputCartEl, refs.submitBtnCartEl);
}
// -----------------------------on submit
async function onSubmit(e) {
  e.preventDefault();
  const getProduct = new GetProduct();
  const productsFromStorage = getCartProductsFromStorage();
  if (productsFromStorage.length === 0) return;

  //формування array для запиту
  const productsArray = productsFromStorage.map(product => {
    return {
      productId: product._id,
      // amount: product.count,
      amount: product.amount,
    };
  });

  //формування об'єкту для запиту
  const bodyData = {
    email: refs.inputCartEl.value,
    products: productsArray,
  };
  // console.log(bodyData);

  //пост запит
  try {
    const data = await getProduct.sendOrder(bodyData);
    refs.submitBtnCartEl.disabled = false;
    const modalMarkup = renderDataMarkup(data.message);
    appendMarkup(refs.cartModalEl, modalMarkup);
    toggleModal();

    refs.cartFormEl.reset();
  } catch (error) {
    console.log(error);
  }
}

// -----------------------------get products array
export function getCartProductsFromStorage() {
  try {
    const storageData = JSON.parse(localStorage.getItem('BASKET')) ?? [];
    return storageData;
  } catch (error) {
    console.log(error);
  }
}

// -------------------------по кліку на кнопку модалки
function onClick() {
  toggleModal();
  const mesEl = document.querySelector('.footer-modal-message');
  refs.submitBtnCartEl.disabled = true;
  mesEl.remove();
  deleteAllProducts();
}
if (refs.cartModalCloseBtn) {
  refs.cartModalCloseBtn.addEventListener('click', onClick);
}

// ---------------------------helpers

function renderDataMarkup(mes) {
  return `<p class="footer-modal-message"">${mes}</p>`;
}

function appendMarkup(parentEl, markup) {
  parentEl.insertAdjacentHTML('afterbegin', markup);
}

function toggleModal() {
  refs.cartBackdropEl.classList.toggle('visually-hidden');
  // console.log('backdrop');
  document.body.classList.toggle('no-scroll');
}
