import { GetProduct } from './products-api/api';
import { createProductsCards } from './create-products-card/createProductsCards';
import { refs } from './refs';
import { setToLocalStg } from './local-storadge/localstorage';
import { FILTERS_KEY } from './variables/variables';

//пошук по кнопці "Search" форми пошуку
export async function getProductSearch(evt) {
  evt.preventDefault();
  updateLocStor();
  createProductsCards();
}

// оновлення данних в локальному сховищі і відмалювання карток товарів
export function updateLocStor() {
  const searchParams = setSerchParams();
  setToLocalStg(FILTERS_KEY, searchParams);
}

// формування параметрів для збереження в локальне сховище
export function setSerchParams() {
  const getProduct = new GetProduct(changingPerPage());
  let objSearch = {};
  new FormData(refs.searchForm).forEach((value, key) => {
    objSearch[key] = value.replaceAll('&', '%26');
  });
  objSearch.page = getProduct.page;
  objSearch.limit = getProduct.perPage;
  return objSearch;
}

//зміна кількості карток продукту в залежності від розміру екрана
function changingPerPage() {
  let page = 6;
  if (window.innerWidth > 767 && window.innerWidth < 1440) {
    page = 8;
  } else if (window.innerWidth > 1440) {
    page = 9;
  }
  return page;
}
