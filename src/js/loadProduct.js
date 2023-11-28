import { getSerchParamsFromLocStg } from './getSerchParamsFromLocStg';
import { GetProduct } from './products-api/api';
import { appendMarkup } from './markup/appendMarkup';
import { createMarkupProducts } from './markup/createMarkupProductsCard';
import { refs } from './refs';
import { onPaginationRender } from './pagination';

export async function getProductsFromServer() {
  try {
    const getProduct = new GetProduct();

    const searchParams = await getSerchParamsFromLocStg();

    const arrProducts = await getProduct.getProducts(searchParams);

    if (!arrProducts.results.length) {
      console.log(arrProducts.results);
      //якщо нічого не знайшло
      //......
      return;
    }

    const markupProductCards = createMarkupProducts(arrProducts.results);

    onPaginationRender(getProduct.currentPage, getProduct.totalPages);

    appendMarkup(refs.productCardsContainer, markupProductCards);
  } catch (error) {
    console.log(error.message);
  }
}
