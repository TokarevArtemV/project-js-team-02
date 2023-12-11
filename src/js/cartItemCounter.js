// import { getProductFormBasket } from './getProductFormBasket';
import { loadOff } from './loadStateForLoader';
import { countCartProducts } from './countCartProducts';
import { calculateTotalCount } from './calculateTotalCount';
import { getFromLocalStg, setToLocalStg } from './local-storadge/localstorage';
import { BASKET_KEY } from './variables/variables';

//////лічильник одиниць прродуктів

export function cartItemCounter() {
  let counter = 1;
  try {
    const counterBoxEl = document.querySelector('.flex-cart-js');

    counterBoxEl.addEventListener('click', onClick);

    function onClick(evt) {
      const cardId = evt.target.closest('.js-basket-card').dataset.cardid;
      if (evt.target.closest('#minus')) {
        const spanNumberEl = evt.target.closest('#minus').nextElementSibling;
        counter = Number(spanNumberEl.textContent);
        if (counter !== 1) {
          spanNumberEl.textContent = counter;
          countOfProducts(cardId, (spanNumberEl.textContent = counter - 1));
          calculateTotalCount();
        }
      }

      if (evt.target.closest('#plus')) {
        const spanNumberEl = evt.target.closest('#plus').previousElementSibling;
        counter = Number(spanNumberEl.textContent);
        if (counter < 100) {
          spanNumberEl.textContent = counter;
          countOfProducts(cardId, (spanNumberEl.textContent = counter + 1));
          calculateTotalCount();
        }
      }

      countCartProducts();
    }
  } catch (error) {
    loadOff();
  }
}

////// перерахунок кількості в корзині

function countOfProducts(productId, counter) {
  const arrProducts = getFromLocalStg(BASKET_KEY) || [];

  const newBasketObj = arrProducts.map(({ product, amount }) => {
    if (product._id === productId) {
      amount = counter;
      return {
        product,
        amount: counter,
      };
    }
    return { product, amount };
  });

  setToLocalStg(BASKET_KEY, newBasketObj);
}

////////
