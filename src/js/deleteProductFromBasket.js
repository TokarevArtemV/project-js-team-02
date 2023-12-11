import { countCartProducts } from './countCartProducts';
import { toggleCartMarkup } from './toggleEmptyCart';
import { getFromLocalStg, setToLocalStg } from './local-storadge/localstorage';
import { BASKET_KEY } from './variables/variables';
import { calculateTotalCount } from './calculateTotalCount';

export async function deleteProductFromBasket(evt) {
  try {
    if (!evt.target.closest('.remove-button')) return;
    const cardId = evt.target.closest('.product-cart-js').dataset.cardid;

    const dataProduct = getFromLocalStg(BASKET_KEY);
    const newDataProd = dataProduct.filter(
      ({ product }) => product._id !== cardId
    );
    setToLocalStg(BASKET_KEY, newDataProd);
    evt.target.closest('.product-cart-js').remove();

    countCartProducts();
    calculateTotalCount();
    toggleCartMarkup();
  } catch (error) {
    console.log('Server response error when deleting a card', error.message);
  }
}
