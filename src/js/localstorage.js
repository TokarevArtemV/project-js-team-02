import { cartCount } from "./cartCount";

export const itemsNumbers = document.querySelector('.item-number')


export const itemNumberCart = [
    { item: 1 }, { item: 2 }, { item: 2 }, { item: 2 }, { item: 2 }, { item: 2 }, { item: 2 }, { item: 2 }, { item: 2 }, { item: 2 }, { item: 2 }, { item: 2 }, { item: 4 }, { item: 5 }, { item: 6 }
];

cartCount(itemNumberCart, itemsNumbers)

localStorage.setItem('basket', JSON.stringify(itemNumberCart))