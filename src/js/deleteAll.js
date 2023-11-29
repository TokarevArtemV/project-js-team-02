import { refs } from './refs';
import { saveProductsToBasket } from './saveSerchParamsToLocStg';

export function deleteAllProducts() {
  saveProductsToBasket([]);
  refs.productFormBasket.innerHTML = '';
  refs.cartContent.classList.toggle('visually-hidden');
  refs.sumCartEl.textContent = '$0,00';
  refs.cartNumber.textContent = '0';

  refs.deleteAllButton.removeEventListener('click', deleteAllProducts);
}
