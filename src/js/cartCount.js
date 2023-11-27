import { refs } from './refs';

function countCartProducts() {
  const allCartElArr = document.querySelectorAll('.js-cart-number');
  console.log(allCartElArr);
  try {
    const cartProducts = JSON.parse(localStorage.getItem('BASKET'));
    console.log(cartProducts);
    //
    const totalProductsCount = cartProducts.reduce((acc, product) => {
      return acc + product.count;
    }, 0);
    allCartElArr.forEach(el => (el.innerHTML = `${totalProductsCount}`));
  } catch (error) {
    console.log(error);
  }
}
countCartProducts();
