import '../variables/variables.js';
import { refs } from '../refs.js';
import { GetProduct } from '../products-api/api.js';
import { createMarkupPopularProducts } from '../markup/createMarkupPopularProducts.js';
import { appendMarkup } from '../markup/appendMarkup.js';
import { POPULAR_PRODUCTS_KEY } from '../variables/variables.js';
import { setToLocalStg } from '../local-storadge/localstorage.js';

export async function createPopularProductsCards() {
  const getProduct = new GetProduct();
  const arrProducts = await getProduct.getPopular();

  setToLocalStg(POPULAR_PRODUCTS_KEY, arrProducts);

  const markup = createMarkupPopularProducts(arrProducts);
  appendMarkup(refs.popularProdEl, markup);
}
