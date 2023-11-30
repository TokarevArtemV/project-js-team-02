import { productsInBasket } from './getProductFormBasket';
import { saveProductsToBasket } from './saveSerchParamsToLocStg';
import { getProductFormBasket } from './getProductFormBasket';
import { countCartProducts } from './cartCount';
import { loadOn, loadOff } from './loadStateForLoader';
//cart
import { checkStorage } from './toggleEmptyCart';
import { toggleFullBasket } from './toggleEmptyCart';
import { toggleEmptyBasket } from './toggleEmptyCart';

export async function deleteBasketProductCards(evt) {
  try {
    if (!evt.target.closest('.remove-button')) return;
    loadOn();
    const cardId = evt.target.closest('.product-cart-js').dataset.cardid;

    const dataProduct = productsInBasket();
    const newDataProd = dataProduct.filter(product => product._id !== cardId);
    saveProductsToBasket(newDataProd);
    evt.target.closest('.product-cart-js').remove();

    const isStorageFull = checkStorage();

    if (!isStorageFull) {
      toggleFullBasket();
      toggleEmptyBasket();
      // return ; ?
    }

    getProductFormBasket();

    countCartProducts();

    loadOff();
  } catch (error) {
    loadOff();
    console.log('Server response error when deleting a card', error.message);
  }
}
