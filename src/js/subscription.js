import { appendMarkupAfterbeginWithoutReset } from './markup/appendMarkup';
import { GetProduct } from './products-api/api';
import { refs } from './refs';

// -----------------------------сабміт форми
export async function onSubmitSubscription(e) {
  const getProduct = new GetProduct();
  e.preventDefault();
  const userEmailData = {
    email: refs.footerInputEl.value,
  };

  try {
    const data = await getProduct.subscription(userEmailData);
    refs.footerSubmitBtnEl.disabled = false;

    const modalMarkup = renderDataMarkup(data.message);
    appendMarkupAfterbeginWithoutReset(refs.footerModalEl, modalMarkup);
    refs.footerSubmitBtnEl.disabled = true;
    toggleModal();
    refs.footerFormEl.reset();
  } catch (error) {
    console.error(error);
  }
}

// -------------------------по кліку на кнопку модалки

refs.footerModalBtnCloseEl.addEventListener('click', onClick);

function onClick() {
  toggleModal();
  const mesEl = document.querySelector('.footer-modal-message');
  refs.footerSubmitBtnEl.disabled = true;
  mesEl.remove();
  refs.footerModalBtnCloseEl.removeEventListener('click', onClick);
}

// ---------------------------helpers

function renderDataMarkup(mes) {
  return `<p class="footer-modal-message"">${mes}</p>`;
}

function toggleModal() {
  refs.footerBackdropEl.classList.toggle('is-hidden');
  document.body.classList.toggle('no-scroll');
}
