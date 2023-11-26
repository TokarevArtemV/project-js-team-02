import { createMarkupBasketProductsCard } from './markup/createMarkupBasketProductsCard';
import { GetProduct } from './products-api/api';
import { appendMarkup } from './markup/appendMarkup';
import { refs } from './refs';

const basket = [
  { _id: '640c2dd963a319ea671e383b', count: 1 },
  { _id: '640c2dd963a319ea671e385e', count: 3 },
  { _id: '640c2dd963a319ea671e383b', count: 2 },
  { _id: '640c2dd963a319ea671e385e', count: 3 },
  { _id: '640c2dd963a319ea671e385e', count: 3 },
  { _id: '640c2dd963a319ea671e383b', count: 1 },
  { _id: '640c2dd963a319ea671e383b', count: 1 },
];
localStorage.setItem('BASKET', JSON.stringify(basket));

modalProductCard();
export async function modalProductCard() {
  const getProduct = new GetProduct();
  const datafromLocStor = JSON.parse(localStorage.getItem('BASKET'));
  const getInfoCard = await Promise.all(
    datafromLocStor.map(async ({ _id }) => {
      const data = await getProduct.getProductId(_id);
      return data;
    })
  );
  appendMarkup(
    refs.productFormBasket,
    createMarkupBasketProductsCard(getInfoCard)
  );
}
