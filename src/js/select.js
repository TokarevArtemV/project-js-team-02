import SlimSelect from 'slim-select';

new SlimSelect({
  select: '.home_categorias-search',
  settings: {
    placeholderText: 'Categories',
    showSearch: false,
    searchHighlight: true,
  },
});

new SlimSelect({
  select: '.home_categorias-sort',
  settings: {
    placeholderText: 'A to Z',
    showSearch: false,
    searchHighlight: true,
  },
});
