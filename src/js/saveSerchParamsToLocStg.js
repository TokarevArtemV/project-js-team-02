// функция сохранения параметров поиска в локальное хранилище

export function saveSerchParamsToLocStg(serchParams) {
  localStorage.setItem('FILTERS_ITEM', JSON.stringify(serchParams));
  console.log(serchParams);
}
