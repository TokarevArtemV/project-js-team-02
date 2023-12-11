import { loadOff } from './loadStateForLoader';
import { getFromLocalStg } from './local-storadge/localstorage';
import { BASKET_KEY } from './variables/variables';

export function countCartProducts() {
  const allCartElArr = document.querySelectorAll('.js-cart-number');

  try {
    const cartProducts = getFromLocalStg(BASKET_KEY) || [];

    const totalProductsCount = cartProducts.length;

    allCartElArr.forEach(el => (el.innerHTML = `${totalProductsCount}`));
  } catch (error) {
    loadOff();
  }
}
