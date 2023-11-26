import SlimSelect from 'slim-select';
import { GetProduct } from './products-api/api';
import { getCategories } from './createRequestCategory';
import { markupOptionsCategory } from './markupOptionsCategory';
import { saveSerchParamsToLocStg } from './saveSerchParamsToLocStg';
import { getProductsFromServer } from './loadProduct';

const searchElCategories = document.getElementById('searchParams1');
const form_search = document.querySelector('.home__form-search');

// инициализация библиотеки сортировки

new SlimSelect({
  select: '.home_categorias-sort',
  settings: {
    placeholderText: 'A-Z',
    showSearch: false,
    searchHighlight: true,
  },
  events: {
    // формирование запроса
    afterChange: newVal => {
      const serchParams = setSerchParams();
      saveSerchParamsToLocStg(serchParams);
    },
  },
});

async function loadPage() {
  // получение масива категорий
  const arrCategories = await getCategories();

  // создание разметки селекта
  const markupOptions = markupOptionsCategory(arrCategories);

  // отрисовка селекта
  searchElCategories.insertAdjacentHTML('beforeend', markupOptions);

  // инициализация библиотеки поиска
  new SlimSelect({
    select: '.home_categorias-search',
    settings: {
      placeholderText: 'Categories',
      showSearch: false,
      searchHighlight: true,
    },
    events: {
      // формирование запроса
      afterChange: newVal => {
        const serchParams = setSerchParams();
        saveSerchParamsToLocStg(serchParams);
      },
    },
  });
  // сохранение параметров поиска в локальное хранилище при загрузке страницы
  const serchParams = setSerchParams();
  saveSerchParamsToLocStg(serchParams);
}

// формирование запроса по сабмиту
form_search.addEventListener('submit', submitSearchForm);

function submitSearchForm(event) {
  event.preventDefault();
  const serchParams = setSerchParams();
  saveSerchParamsToLocStg(serchParams);
  getProductsFromServer();
}

// формирование параметров поиска
function setSerchParams() {
  const getProduct = new GetProduct();
  let objSearch = {};
  new FormData(form_search).forEach((value, key) => {
    if (value) {
      objSearch[key] = value;
    }
  });
  objSearch.page = getProduct.page;
  objSearch.limit = getProduct.perPage;
  return objSearch;
}

loadPage();
