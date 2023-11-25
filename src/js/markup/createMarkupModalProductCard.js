export function createMarkupModalProductCard(data) {
    const markup = data
        .map(({ image, name, category, size, popularity, desc, price }) => {
            return `<div class="modal-content">
            <button type="button" data-modal-close class="close">
                <svg class="close-icon" width="28" height="28">
                    <use href="./images/icons.svg#icon-close"></use>
                </svg>
            </button> 
            <div class="wrapper">
                <div class="picture">
                    <img src="${image}" alt="${name}" width="160">
                </div>
    
                <div class="modal-container">
                    <h3 class="modal-name">${name}</h3>
                    <ul class="modal-list list">
                        <div class="group-item">
                            <li>Category: <span class="category modal-item">${category}</span></li>
                            <li>Size: <span class="size modal-item">${size}</span></li>
                        </div>
                        <li>Popularity: <span class="popularity modal-item">${popularity}</span></li>
                    </ul>
                    <p class="modal-text">${desc}</p>
                </div>
            </div>
            
            <div class="price-wrapper wrapper">
                <p class="modal-price">${price}</p>
                <button class="add-to-cart-btn btn" type="button">
                    Add to
                    <svg width="18" height="18">
                        <use href="./images/icons.svg#icon-cart"></use>
                    </svg>
                </button>
            </div>
        </div>
      `;
        })
        .join('');
    return markup;
}