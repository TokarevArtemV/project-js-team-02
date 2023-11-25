import { refs } from './refs';
import { GetProduct } from './products-api/api';
import { createMarkupPopularProducts } from './markup/createMarkupPopularProducts';

const getProduct = new GetProduct();

getPopular();

async function getPopular() {
  const objPopular = await getProduct.getPopular();
  const markupPopular = createMarkupPopularProducts(objPopular);
  refs.popularProdEl.innerHTML = '';
  refs.popularProdEl.insertAdjacentHTML('beforeend', markupPopular);
}
