export function setToLocalStg(key, objData) {
  try {
    const KEY = key + '_ITEM';
    const dataToLocalStg = {
      key,
      data: objData,
    };
    localStorage.setItem(KEY, JSON.stringify(dataToLocalStg));
  } catch (error) {
    return error.message;
  }
}

export function getFromLocalStg(key) {
  try {
    const KEY = key + '_ITEM';
    const data = JSON.parse(localStorage.getItem(KEY));
    return data.data;
  } catch (error) {}
}
