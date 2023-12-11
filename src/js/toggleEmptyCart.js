import { getFromLocalStg } from './local-storadge/localstorage';
import { refs } from './refs';
import { BASKET_KEY } from './variables/variables';

export function toggleCartMarkup() {
  if (!!getFromLocalStg(BASKET_KEY).length) {
    refs.emptyBasketBoxEl.classList.add('visually-hidden');
    refs.fullBasketBoxEl.classList.remove('visually-hidden');
  } else {
    refs.emptyBasketBoxEl.classList.remove('visually-hidden');
    refs.fullBasketBoxEl.classList.add('visually-hidden');
  }
}
