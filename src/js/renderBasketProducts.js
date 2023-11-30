import { getProductFormBasket } from './getProductFormBasket';
import { createMarkupBasketProductsCard } from './markup/createMarkupBasketProductsCard';
import { refs } from './refs';
import { countCartProducts } from './cartCount';
import { cartItemCounter } from './cartItemCounter';
import { appendMarkupAfterbeginWithoutReset } from './markup/appendMarkup';

export async function renderBasketProducts() {
  const markupBasketProducts = await getProductFormBasket();

  appendMarkupAfterbeginWithoutReset(
    refs.productFormBasket,
    createMarkupBasketProductsCard(markupBasketProducts)
  );

  // кількість товарів в корзині
  countCartProducts();

  //лічильник
  cartItemCounter();
}
