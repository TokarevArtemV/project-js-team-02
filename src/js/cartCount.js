//obj = мастив з продуктами
//countNumberPlace = місце розмітки в ДОМ. "number"

export function cartCount(obj, countNumberPlace) {
    obj.reduce((acc, item, idx, arr) => {
        acc = arr.length
        return countNumberPlace.innerHTML = parseInt(acc)
    }, 0)
};