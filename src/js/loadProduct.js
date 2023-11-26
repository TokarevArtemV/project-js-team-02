import { getSerchParamsFromLocStg } from './getSerchParamsFromLocStg';
import { GetProduct } from './products-api/api';
import { appendMarkup } from './markup/appendMarkup';
import { createMarkupProducts } from './markup/createMarkupProductsCard';
import { refs } from './refs';

export async function getProductsFromServer() {
  const getProduct = new GetProduct();

  const searchParams = await getSerchParamsFromLocStg();
  try {
    const arrProducts = await getProduct.getProducts(searchParams);
    const markupProductCards = createMarkupProducts(arrProducts.results);

    appendMarkup(refs.productCardsContainer, markupProductCards);
  } catch (error) {
    console.log(error.message);
  }
}

getProductsFromServer();
