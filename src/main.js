// import './js/mob-menu.js';
// import './js/slider.js';
// import './js/scroll.js';
// import './js/jquery.flipster.min.js';
// import './js/gallery.js';
import './js/api.js';
import { selectMarkup } from './js/markup.js';
import { GetProduct } from './js/api.js';

import SlimSelect from 'slim-select';
import '../node_modules/slim-select/dist/slimselect.css';

const listCategoriesEl = document.querySelector('#selectElement');

const getProduct = new GetProduct();

async function getCategories() {
  const objCategories = await getProduct.getCategories();
  const markup = selectMarkup(objCategories);
  listCategoriesEl.insertAdjacentHTML(
    'beforeend',
    `<option data-placeholder="true"></option>${markup}`
  );
  new SlimSelect({
    select: '#selectElement',
    settings: {
      searchPlaceholder: '',
      placeholderText: 'Categories',
    },
  });
}

getCategories();

const string = 'Breads_&_Bakery';
string.replaceAll('&', '%26');
