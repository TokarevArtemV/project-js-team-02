export function getSerchParamsFromLocStg() {
  const data = localStorage.getItem('FILTERS_ITEM');
  return JSON.parse(data);
}
