import { loadOff } from './loadStateForLoader';
import { productsInBasket } from './getProductFormBasket';

export function countCartProducts() {
  const allCartElArr = document.querySelectorAll('.js-cart-number');

  try {
    const cartProducts = productsInBasket() || [];

    //

    const totalProductsCount = cartProducts.reduce((acc, product) => {
      return acc + product.amount;
    }, 0);
    allCartElArr.forEach(el => (el.innerHTML = `${totalProductsCount}`));
  } catch (error) {
    loadOff();
  }
}
