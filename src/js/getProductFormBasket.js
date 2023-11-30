import { GetProduct } from './products-api/api';
import { refs } from './refs';
import { getCartProductsFromStorage } from './createOrder';

export async function getProductFormBasket() {
  let totalCount = 0;
  const getProduct = new GetProduct();
  const datafromLocStor = getCartProductsFromStorage();
  // console.log(datafromLocStor);
  // if (datafromLocStor.length === 0) return ..;

  const getInfoCard = await Promise.all(
    datafromLocStor.map(async ({ _id, amount }) => {
      const data = await getProduct.getProductId(_id);

      totalCount += data.price * amount;

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

// function getProductsFromStorage() {
//   try {
//     const storageData = JSON.parse(localStorage.getItem('BASKET')) ?? [];
//     return storageData;
//   } catch (error) {
//     console.log(error);
//   }
// }
