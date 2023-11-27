import { GetProduct } from './products-api/api';

// const basket = [
//   { _id: '640c2dd963a319ea671e383b', count: 1 },
//   { _id: '640c2dd963a319ea671e376e', count: 3 },
//   { _id: '640c2dd963a319ea671e3860', count: 4 },
//   { _id: '640c2dd963a319ea671e385e', count: 3 },
//   { _id: '640c2dd963a319ea671e376f', count: 2 },
//   { _id: '640c2dd963a319ea671e3770', count: 1 },
//   { _id: '640c2dd963a319ea671e3860', count: 1 },
// ];
// localStorage.setItem('BASKET', JSON.stringify(basket));

export async function getProductFormBasket() {
  const getProduct = new GetProduct();
  const datafromLocStor = JSON.parse(localStorage.getItem('BASKET'));
  const getInfoCard = await Promise.all(
    datafromLocStor.map(async ({ _id }) => {
      const data = await getProduct.getProductId(_id);
      return data;
    })
  );
  return getInfoCard;
}

export function productsInBasket() {
  try {
    return JSON.parse(localStorage.getItem('BASKET'));
  } catch (error) {
    error.message;
  }
}
