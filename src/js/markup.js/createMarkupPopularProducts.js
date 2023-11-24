import { GetProduct } from "../products-api/api";
const productsCards = document.querySelector('.popular-products-list')

const getProduct = new GetProduct()

async function createMarkupPopularProducts() {
    const objPopular = await getProduct.getPopular().then(data => {
        const markup = data.map(({ img, name, category, size, popularity }) => {
            return `<li class="popular-products-item">
          <div class="card-image">
            <img src="${img}" alt="${name}" />
          </div>
          <div class="card-info">
            <h3 class="products-card-title">${name}</h3>
            <p class="popular-cards-text category">
              Category: <span>${category}</span>
            </p>
            <div class="text-box">
              <p class="popular-cards-text">Size: <span>${size}</span></p>
              <p class="popular-cards-text">
                Popularity: <span>${popularity}</span>
              </p>
            </div>
          </div>
          <button class="button-shopping">
            <svg class="icon-shopping" width="12" height="12">
              <use href="./images/icons/icons.svg#icon-shopping-cart"></use>
            </svg>
          </button>
        </li>`
        }).join('').replaceAll('_', ' ');
        productsCards.innerHTML = markup;
  });
  
}

createMarkupPopularProducts()