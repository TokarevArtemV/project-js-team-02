import { getProductFormBasket } from './getProductFormBasket';
import { loadOff } from './loadStateForLoader';

//-----------------------------лічильник одиниць прродуктів
export async function cartItemCounter() {
  let counter = 0;
  try {
    const data = await getProductFormBasket();
    const counterBoxEl = document.querySelector('.flex-cart-js');
    const spanNumberEl = document.querySelector('.item-counter-span');
    counterBoxEl.addEventListener('click', onClick);

    function onClick(e) {
      if (
        e.target.classList.contains('item-decrease-counter') ||
        e.target.classList.contains('cart-minus') ||
        e.target.nodeName === 'use'
      ) {
        if (counter !== 0) {
          counter -= 1;
          spanNumberEl.textContent = counter;
        }
      }
      if (
        e.target.classList.contains('item-increase-counter') ||
        e.target.classList.contains('cart-plus') ||
        e.target.nodeName === 'use'
      ) {
        counter += 1;
        spanNumberEl.textContent = counter;
      }
      console.log(counter);
    }
  } catch (error) {
    loadOff();
  }
}
