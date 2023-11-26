let Basket = [
  { _id: "640c2dd963a319ea671e383b", count: 2 },
  { _id: "640c2dd963a319ea671e385e", count: 3 },
];


export function incrementCount(itemId) {
  const basketItem = Basket.find((item) => item._id === itemId);

  if (basketItem) {
    basketItem.count += 1;
    console.log(`Item with ID '640c2dd963a319ea671e383b' count increased. New count: ${basketItem.count}`);
  } else {
    return;
  }
}

export function decrementCount(itemId) {
  const basketItem = Basket.find((item) => item._id === itemId);

  if (basketItem) {
    basketItem.count = basketItem.count > 0 ? basketItem.count - 1 : 0;
    console.log(`Item with ID ${itemId} count decreased. New count: ${basketItem.count}`);
  } else {
return;
  }
}
