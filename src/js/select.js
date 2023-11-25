import SlimSelect from 'slim-select';
import { GetProduct } from './products-api/api';
import { getCategories } from './createRequestCategory';
import { markupOptionsCategory } from './markupOptionsCategory';
import { saveSerchParamsToLocStg } from './saveSerchParamsToLocStg';
import { getSerchParamsFromLocStg } from './getSerchParamsFromLocStg';

const searchElCategories = document.getElementById('searchParams1');
const form_search = document.querySelector('.home__form-search');

startPage();
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
      const serchParams = getSerchParams();
      saveSerchParamsToLocStg(serchParams);
    },
  },
});
async function startPage() {
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
        const serchParams = getSerchParams();
        saveSerchParamsToLocStg(serchParams);
      },
    },
  });
  // сохранение параметров поиска в локальное хранилище при загрузке страницы
  const serchParams = getSerchParams();
  saveSerchParamsToLocStg(serchParams);
}

// формирование запроса по сабмиту
form_search.addEventListener('submit', submitSearchForm);

function submitSearchForm(event) {
  event.preventDefault();
  const serchParams = getSerchParams();
  saveSerchParamsToLocStg(serchParams);
}

// формирование параметров поиска
function getSerchParams() {
  const getProduct = new GetProduct();

  let objSearch = Object.fromEntries(new FormData(form_search));
  console.log(objSearch);
  objSearch.page = getProduct.page;
  objSearch.limit = getProduct.perPage;
  return objSearch;
}
// сохранение параметров поиска в локальное хранилище при загрузке страницы
const serchParams = getSerchParams();
saveSerchParamsToLocStg(serchParams);
