import { getProductFormBasket } from './getProductFormBasket';
import { createMarkupBasketProductsCard } from './markup/createMarkupBasketProductsCard';
import { refs } from './refs';

import { appendMarkupAfterbeginWithoutReset } from './markup/appendMarkup';

export async function renderBasketProducts() {
  const markupBasketProducts = await getProductFormBasket();

  appendMarkupAfterbeginWithoutReset(
    refs.productFormBasket,
    createMarkupBasketProductsCard(markupBasketProducts)
  );
}
