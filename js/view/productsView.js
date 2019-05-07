import { elements } from './base';
import { miscData } from './miscData';

export const renderProduct = product => {
    const markup =  `
    <div class="plp-card">
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
                        <span class="plp-card-cta hide-on-tablet">
                            Buy Now @ MRP Rs.${product.price}
                        </span>
                    </a>
                </div>
            </div>

            <div class="plp-price-container">
                <span class="plp-card-price show-on-desktop">MRP Rs.87</span>
                <a href="#" class="btn-buy">
                    <span class="plp-card-cta hide-on-mobile show-on-tablet">
                        Buy Now @ MRP Rs.${product.price}
                    </span>
                </a>
                <a href="#" class="btn-buy">
                    <span class="plp-card-cta-tabs show-on-desktop">
                        Buy Now
                    </span>
                </a>
            </div>
        </div>
    </div>  <!-- plp-card ends -->
    `;
    
    elements.plpPageContent.insertAdjacentHTML('beforeend', markup);
}

export const renderProducts = products => {
    //render only for category Fruits
    // products.forEach(renderProduct);

    const fruitItems = products.filter(function(item) {
        return item.category == miscData.categoryFruits;
    });

    fruitItems.forEach(renderProduct);
}