import { refs } from './refs';

export function deleteAllProducts() {
  localStorage.removeItem('BASKET');
  refs.productFormBasket.innerHTML = '';
  refs.cartContent.classList.toggle('visually-hidden');
  refs.sumCartEl.textContent = '$0';
  refs.cartNumber.textContent = '0';

  refs.deleteAllButton.removeEventListener('click', deleteAllProducts);
}