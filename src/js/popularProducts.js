import { refs } from './refs';
import { GetProduct } from './products-api/api';
import { createMarkupPopularProducts } from './markup/createMarkupPopularProducts';
import { appendMarkup } from './markup/appendMarkup';

const getProduct = new GetProduct();

getPopular();

async function getPopular() {
  const objPopular = await getProduct.getPopular();
  appendMarkup(refs.popularProdEl, createMarkupPopularProducts(objPopular));
}
