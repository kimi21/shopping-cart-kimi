import { elements } from './base';
import { miscData } from './miscData';

export const renderProduct = product => {
    const markup =  `
    <div class="plp-card"  data-product-id="${product.id}" data-product-name="${product.name}"
    data-product-imageUrl="${product.imageURL}" data-product-desc="${product.description}" 
    data-product-price="${product.price}" data-product-category="${product.category}" 
    data-product-stock="${product.stock}" data-product-sku="${product.sku}">
        <h2>${product.name}</h2>
    
        <div class="plp-card-content">
            <div class="plp-card-img-text">
                <div class="plp-card__img">
                    <img src="./.${product.imageURL}" />
                </div>
               
                <div class="plp-desc-container">
                    <span class="plp-card-desc bgcolor">
                        ${product.description}
                    </span>
                    <a href="#" class="btn-buy">
                        <span class="btn-buy plp-card-cta hide-on-tablet" data-product-id="${product.id}">
                            Buy Now @ MRP Rs.${product.price}
                        </span>
                    </a>
                </div>
            </div>

            <div class="plp-price-container">
                <span class="plp-card-price show-on-desktop">MRP Rs.87</span>
                <a href="#" class="btn-buy">
                    <span class="btn-buy plp-card-cta hide-on-mobile show-on-tablet" data-product-id="${product.id}">
                        Buy Now @ MRP Rs.${product.price}
                    </span>
                </a>
                <a href="#" class="btn-buy">
                    <span class="btn-buy plp-card-cta-tabs show-on-desktop hide-below-desktop" data-product-id="${product.id}">
                        Buy Now
                    </span>
                </a>
            </div>
        </div>
    </div>  <!-- plp-card ends -->
    `;

    if(elements.plpPageContent)
        elements.plpPageContent.insertAdjacentHTML('beforeend', markup);
}

export const renderProducts = products => {
    //render only for category Fruits
    // products.forEach(renderProduct);

    //update cart count in the header
    var cartData;
    cartData = JSON.parse(localStorage.getItem('cartData'));

    if(cartData)
        elements.headerCartCountDiv.textContent = cartData.length + (cartData.length === 1 ? ' item' : ' items');

    const fruitItems = products.filter(function(item) {
        return item.category == miscData.categoryFruits;
    });

    fruitItems.forEach(renderProduct);
}