import { getSerchParamsFromLocStg } from './getSerchParamsFromLocStg';
import { GetProduct } from './products-api/api';
import { appendMarkup } from './markup/appendMarkup';
import { createMarkupProducts } from './markup/createMarkupProductsCard';
import { refs } from './refs';
import { onPaginationRender } from './pagination';
import { updateLocStor } from './search';

export async function getProductsFromServer() {
  const getProduct = new GetProduct();

  try {
    updateLocStor();
    const searchParams = await getSerchParamsFromLocStg();
    const arrProducts = await getProduct.getProducts(searchParams);
    const markupProductCards = createMarkupProducts(arrProducts.results);

    onPaginationRender(getProduct.page, getProduct.totalPages);

    appendMarkup(refs.productCardsContainer, markupProductCards);
  } catch (error) {
    console.log(error.message);
  }
}
