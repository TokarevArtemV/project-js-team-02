import { GetProduct } from './products-api/api';
import { saveSerchParamsToLocStg } from './saveSerchParamsToLocStg';
import { getProductsFromServer } from './loadProduct';
import { refs } from './refs';
import { loadOn } from './loadStateForLoader';

// формування запиту по сабміту
export async function getProductSearch(evt) {
  evt.preventDefault();
  updateLocStor();
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

// оновлення данних в локальному сховищі
export function updateLocStor() {
  loadOn();
  const searchParams = setSerchParams();
  saveSerchParamsToLocStg(searchParams);
  getProductsFromServer(searchParams);
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
