// import { getProductFormBasket } from './getProductFormBasket';
import { loadOff } from './loadStateForLoader';
import { productsInBasket } from './getProductFormBasket';
import { saveProductsToBasket } from './saveSerchParamsToLocStg';

//////

//////лічильник одиниць прродуктів

export function cartItemCounter() {
  let counter = 0;
  try {
    // const data = await getProductFormBasket();
    const counterBoxEl = document.querySelector('.flex-cart-js');

    counterBoxEl.addEventListener('click', onClick);

    function onClick(evt) {
      const cardId = evt.target.closest('.js-basket-card').dataset.cardid;
      if (evt.target.closest('#minus')) {
        const spanNumberEl = evt.target.closest('#minus').nextElementSibling;
        counter = Number(spanNumberEl.textContent);
        if (counter !== 0) {
          spanNumberEl.textContent = counter;
          countOfProducts(cardId, (spanNumberEl.textContent = counter - 1));
        }
      }

      if (evt.target.closest('#plus')) {
        const spanNumberEl = evt.target.closest('#plus').previousElementSibling;
        counter = Number(spanNumberEl.textContent);
        if (counter < 100) {
          spanNumberEl.textContent = counter;
          countOfProducts(cardId, (spanNumberEl.textContent = counter + 1));
        }
      }
    }
  } catch (error) {
    loadOff();
  }
}

////// перерахунок кількості в корзині

function countOfProducts(productId, counter) {
  console.log(productId, counter);
  const arrProducts = productsInBasket() || [];

  const newBasketObj = arrProducts.map(elem => {
    if (elem._id === productId) {
      elem.count = counter;
      return {
        _id: productId,
        count: counter,
      };
    }
    return elem;
  });

  saveProductsToBasket(newBasketObj);
}

////////
