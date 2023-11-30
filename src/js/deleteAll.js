import { refs } from './refs';
import { saveProductsToBasket } from './saveSerchParamsToLocStg';
import { toggleEmptyBasket } from './toggleEmptyCart';
import { toggleFullBasket } from './toggleEmptyCart';

export function deleteAllProducts() {
  saveProductsToBasket([]);
  refs.productFormBasket.innerHTML = '';

  toggleEmptyBasket();
  toggleFullBasket();

  refs.cartNumber.textContent = '0';

  refs.deleteAllButton.removeEventListener('click', deleteAllProducts);
}
