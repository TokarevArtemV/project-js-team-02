import { refs } from './refs';
import { GetProduct } from './products-api/api';
import { createMarkupPopularProducts } from './markup/createMarkupPopularProducts';
import { appendMarkup } from './markup/appendMarkup';

export async function getPopularProducts() {
  const getProduct = new GetProduct();
  const objPopular = await getProduct.getPopular();
  appendMarkup(refs.popularProdEl, createMarkupPopularProducts(objPopular));
}
