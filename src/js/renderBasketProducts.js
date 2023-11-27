import { getProductFormBasket } from './getProductFormBasket';
import { appendMarkup } from './markup/appendMarkup';
import { createMarkupBasketProductsCard } from './markup/createMarkupBasketProductsCard';
import { refs } from './refs';

export async function renderBasketProducts() {
  const markupBasketProducts = await getProductFormBasket();

  appendMarkup(
    refs.productFormBasket,
    createMarkupBasketProductsCard(markupBasketProducts)
  );
}
