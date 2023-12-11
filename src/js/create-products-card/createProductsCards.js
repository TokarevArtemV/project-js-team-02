import { GetProduct } from '../products-api/api';
import { appendMarkup } from '../markup/appendMarkup';
import { createMarkupProducts } from '../markup/createMarkupProductsCard';
import { refs } from '../refs';
import { onPaginationRender } from '../pagination';
import { loadOff } from '../loadStateForLoader';
import { getFromLocalStg, setToLocalStg } from '../local-storadge/localstorage';
import { FILTERS_KEY, PRODUCTS_KEY } from '../variables/variables';

export async function createProductsCards() {
  try {
    const getProduct = new GetProduct();

    const searchParams = await getFromLocalStg(FILTERS_KEY);

    const arrProducts = await getProduct.getProducts(searchParams);

    //запис до локального сховища товарів
    setToLocalStg(PRODUCTS_KEY, arrProducts.results);

    if (!arrProducts.results.length) {
      loadOff();
      //якщо нічого не знайшло
      refs.productCardsContainer.innerHTML = '';
      refs.productCardsContainer.innerHTML =
        '<div class="js-empty-product-card"><p class="text-nothing-found">Nothing was found for the selected <span class=""> filters...</span></p class="text-try"><p class="text-try">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you. </p></div > ';
      refs.productCardsContainer.classList.add(
        'js-empty-product-cards-container'
      );
      refs.pagesRibbonEL.classList.add('visually-hidden');
      return;
    }

    const markupProductCards = createMarkupProducts(arrProducts.results);

    onPaginationRender(getProduct.currentPage, getProduct.totalPages);

    appendMarkup(refs.productCardsContainer, markupProductCards);

    refs.productCardsContainer.classList.remove(
      'js-empty-product-cards-container'
    );
  } catch (error) {
    console.log(error.message);
  }
}
