import { productsInBasket } from './getProductFormBasket';
import { saveProductsToBasket } from './saveSerchParamsToLocStg';
import { getProductFormBasket } from './getProductFormBasket';
import { countCartProducts } from './cartCount';
import { loadOn, loadOff } from './loadStateForLoader';

export async function deleteBasketProductCards(evt) {
  try {
    if (!evt.target.closest('.remove-button')) return;
    loadOn();
    const cardId = evt.target.closest('.product-cart-js').dataset.cardid;

    const dataProduct = productsInBasket();
    const newDataProd = dataProduct.filter(product => product._id !== cardId);
    saveProductsToBasket(newDataProd);
    evt.target.closest('.product-cart-js').remove();
    getProductFormBasket();
    countCartProducts();
    loadOff();
  } catch (error) {
    loadOff();
    console.log('Server response error when deleting a card', error.message);
  }
}
