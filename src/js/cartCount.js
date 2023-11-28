export function countCartProducts() {
  const allCartElArr = document.querySelectorAll('.js-cart-number');

  try {
    const cartProducts = JSON.parse(localStorage.getItem('BASKET'));
    //
    const totalProductsCount = cartProducts.reduce((acc, product) => {
      return acc + product.count;
    }, 0);
    allCartElArr.forEach(el => (el.innerHTML = `${totalProductsCount}`));
  } catch (error) {}
}
