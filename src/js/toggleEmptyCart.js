import { refs } from './refs';

export function toggleCartMarkup() {
  const isStorageFull = checkStorage();

  if (isStorageFull) {
    toggleFullBasket();
  } else {
    toggleEmptyBasket();
  }
}

//--------------------перевірка локального сховища
export function checkStorage() {
  try {
    const storageData = JSON.parse(localStorage.getItem('BASKET')) ?? [];

    return storageData.length !== 0 ? true : false;
  } catch (error) {
    console.log(error);
  }
}
//--------------------тогл класу візуал-хідден

export function toggleEmptyBasket() {
  refs.emptyBasketBoxEl.classList.toggle('visually-hidden');
}

export function toggleFullBasket() {
  refs.fullBasketBoxEl.classList.toggle('visually-hidden');
}
