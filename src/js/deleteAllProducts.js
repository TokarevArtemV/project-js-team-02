import { refs } from './refs';
import { toggleCartMarkup } from './toggleEmptyCart';
import { countCartProducts } from './countCartProducts';
import { setToLocalStg } from './local-storadge/localstorage';
import { BASKET_KEY } from './variables/variables';

export function deleteAllProducts() {
  setToLocalStg(BASKET_KEY, []);

  countCartProducts();
  toggleCartMarkup();

  refs.productFormBasket.innerHTML = '';

  refs.deleteAllButton.removeEventListener('click', deleteAllProducts);
}
