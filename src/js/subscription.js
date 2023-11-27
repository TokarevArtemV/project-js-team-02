import { GetProduct } from './products-api/api';
import { refs } from './refs';
import { validateInput } from './validateInput';

refs.footerSubmitBtnEl.addEventListener('click', onSubmit);

refs.footerSubmitBtnEl.disabled = true;

// ------------------------------валідація форми
validateInput(refs.footerInputEl, refs.footerSubmitBtnEl);

// -----------------------------сабміт форми
async function onSubmit(e) {
  const getProduct = new GetProduct();
  e.preventDefault();
  const userEmailData = {
    email: refs.footerInputEl.value,
  };

  try {
    const data = await getProduct.subscription(userEmailData);
    refs.footerSubmitBtnEl.disabled = false;

    const modalMarkup = renderDataMarkup(data.message);
    appendMarkup(refs.footerModalEl, modalMarkup);

    toggleModal();
    refs.footerFormEl.reset();
  } catch (error) {
    console.error(error);
  }
}
// -------------------------по кліку на кнопку модалки
function onClick() {
  toggleModal();
  const mesEl = document.querySelector('.footer-modal-message');
  refs.footerSubmitBtnEl.disabled = true;
  mesEl.remove();
}
refs.footerModalBtnCloseEl.addEventListener('click', onClick);

// ---------------------------helpers

function renderDataMarkup(mes) {
  return `<p class="footer-modal-message"">${mes}</p>`;
}

function appendMarkup(parentEl, markup) {
  parentEl.insertAdjacentHTML('afterbegin', markup);
}

function toggleModal() {
  refs.footerBackdropEl.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}
