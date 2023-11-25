import { GetProduct } from './products-api/api';
import throttle from 'lodash.throttle';

const refs = {
  footerSubmitBtnEl: document.querySelector('.footer-form-btn'),
  footerInputEl: document.querySelector('.footer-input'),
  footerBackdropEl: document.querySelector('[data-modal]'),
  footerModalEl: document.querySelector('.footer-modal'),
  footerModalBtnCloseEl: document.querySelector('[ data-modal-close]'),
  footerFormEl: document.querySelector('.footer-form'),
};

const getProduct = new GetProduct();

refs.footerSubmitBtnEl.addEventListener('click', onSubmit);
refs.footerInputEl.addEventListener('input', throttle(onInput, 700)); //throttle библиотека ?

refs.footerSubmitBtnEl.disabled = true;

// ------------------------------валідація форми
function onInput() {
  const isValid = this.validity.valid;
  console.log(isValid);
  refs.footerSubmitBtnEl.disabled = true;
  if (isValid) {
    refs.footerSubmitBtnEl.disabled = false;
  }
}

// -----------------------------сабміт форми
async function onSubmit(e) {
  e.preventDefault();
  const userEmailData = {
    email: refs.footerInputEl.value,
  };

  try {
    const data = await getProduct.subscription(userEmailData);

    refs.footerSubmitBtnEl.disabled = false;

    const modalMarkup = renderDataMarkup(data.message);
    appendMarkup(refs.footerModalEl, modalMarkup);

    refs.footerBackdropEl.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');

    refs.footerFormEl.reset();
  } catch (error) {
    console.error(error);
  }
}

// ----------------------------render and append markup

function renderDataMarkup(mes) {
  return `<p class="footer-modal-message">${mes}</p>`;
}

function appendMarkup(parentEl, markup) {
  parentEl.insertAdjacentHTML('afterbegin', markup);
}

// -------------------------по кліку на кнопку модалки
function onClick() {
  function toggleModal() {
    refs.footerBackdropEl.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
  toggleModal();
  const mesEl = document.querySelector('.footer-modal-message');
  refs.footerSubmitBtnEl.disabled = true;
  mesEl.remove();
}
refs.footerModalBtnCloseEl.addEventListener('click', onClick);
