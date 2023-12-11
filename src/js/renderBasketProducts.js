import { getFromLocalStg } from './local-storadge/localstorage';
import { createMarkupBasketProductsCard } from './markup/createMarkupBasketProductsCard';
import { refs } from './refs';
import { countCartProducts } from './countCartProducts';
import { cartItemCounter } from './cartItemCounter';
import { appendMarkupAfterbeginWithoutReset } from './markup/appendMarkup';
import { BASKET_KEY } from './variables/variables';
import { calculateTotalCount } from './calculateTotalCount';

export async function renderBasketProducts() {
  // кількість товарів в корзині
  countCartProducts();

  //лічильник
  cartItemCounter();

  calculateTotalCount();

  const productsFromBasket = getFromLocalStg(BASKET_KEY) || [];
  const markupProductsInBasket =
    createMarkupBasketProductsCard(productsFromBasket);
  appendMarkupAfterbeginWithoutReset(
    refs.productFormBasket,
    markupProductsInBasket
  );
}
