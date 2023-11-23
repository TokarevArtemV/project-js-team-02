import '../node_modules/slim-select/dist/slimselect.css';

import SlimSelect from 'slim-select';

new SlimSelect({
  select: '.categorias-search',
  settings: {
    placeholderText: 'Search All',
    showSearch: false,
    searchHighlight: true,
  },
});
