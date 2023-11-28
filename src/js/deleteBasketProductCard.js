import { productsInBasket } from './getProductFormBasket';
import { saveProductsToBasket } from './saveSerchParamsToLocStg';
import { getProductFormBasket } from './getProductFormBasket';

export async function deleteBasketProductCards(evt) {
  try {
    if (!evt.target.closest('.remove-button')) return;
    const cardId = evt.target.closest('.product-cart-js').dataset.cardid;

    const dataProduct = productsInBasket();
    const newDataProd = dataProduct.filter(product => product._id !== cardId);
    saveProductsToBasket(newDataProd);
    evt.target.closest('.product-cart-js').remove();
    getProductFormBasket();
  } catch (error) {
    console.log('Server response error when deleting a card', error.message);
  }
}
