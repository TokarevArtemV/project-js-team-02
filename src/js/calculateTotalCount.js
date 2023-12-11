import { getFromLocalStg } from './local-storadge/localstorage';
import { refs } from './refs';
import { BASKET_KEY } from './variables/variables';

export async function calculateTotalCount() {
  let totalCount = 0;

  const datafromLocStor = getFromLocalStg(BASKET_KEY) || [];

  datafromLocStor.map(({ product: { price }, amount }) => {
    totalCount += price * amount;
  });

  if (refs.sumCartEl) {
    const countNum = totalCount.toFixed(2).toString().replace('.', ',');
    refs.sumCartEl.innerHTML = '$' + countNum;
  }
}
