import { GetProduct } from './products-api/api';
import { refs } from './refs';

export async function getProductFormBasket() {
  let totalCount = 0;
  const getProduct = new GetProduct();
  const datafromLocStor = productsInBasket();

  const getInfoCard = await Promise.all(
    datafromLocStor.map(async ({ _id, count }) => {
      const data = await getProduct.getProductId(_id);

      totalCount += data.price * count;

      return data;
    })
  );

  if (refs.sumCartEl) {
    const countNum = totalCount.toFixed(2).toString().replace('.', ',');
    refs.sumCartEl.innerHTML = '$' + countNum;
  }

  return getInfoCard;
}

export function productsInBasket() {
  try {
    return JSON.parse(localStorage.getItem('BASKET') || []);
  } catch (error) {
    error.message;
  }
}
