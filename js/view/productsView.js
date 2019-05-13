import { elements } from './base';
import { miscData } from './miscData';

export default class ProductsVeiw {
    constructor() {}

    renderProduct (product) {
        const markup =  `
        <article class="plp-card" data-product-id="${product.id}" data-product-name="${product.name}"
        data-product-imageUrl="${product.imageURL}" data-product-desc="${product.description}" 
        data-product-price="${product.price}" data-product-category="${product.category}" 
        data-product-stock="${product.stock}" data-product-sku="${product.sku}">
            <h2>${product.name}</h2>
        
            <div class="plp-card__content">
                <div class="plp-card__content__img-text">
                    <div class="plp-card__img">
                        <img src="./.${product.imageURL}" alt="${product.name}"/>
                    </div>
                    <div class="plp-card__desc-container">
                        <span class="plp-card__desc bgcolor">
                            ${product.description}
                        </span>
                        <a href="" class="plp-card__cta hide-on-tablet">
                            Buy Now @ MRP Rs.${product.price}
                        </a>
                    </div>
                </div>

                <div class="plp-card__content__price">
                    <span class="plp-card-price show-on-desktop">MRP Rs.87</span>
                    
                    <a class="plp-card__cta hide-on-mobile show-on-tablet">
                        Buy Now @ MRP Rs.${product.price}
                    </a>
                
                    <a class="plp-card__cta-tabs show-on-desktop hide-below-desktop">
                        Buy Now
                    </a>

                </div>
            </div>
        </article>
    `;

    if(elements.plpPageContent)
        elements.plpPageContent.insertAdjacentHTML('beforeend', markup);
    }

    renderProducts ( products) {
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

}

export const renderProduct = product => {
    const markup =  `
        <article class="plp-card" data-product-id="${product.id}" data-product-name="${product.name}"
        data-product-imageUrl="${product.imageURL}" data-product-desc="${product.description}" 
        data-product-price="${product.price}" data-product-category="${product.category}" 
        data-product-stock="${product.stock}" data-product-sku="${product.sku}">
            <h2>${product.name}</h2>
        
            <div class="plp-card__content">
                <div class="plp-card__content__img-text">
                    <div class="plp-card__img">
                        <img src="./.${product.imageURL}" alt="${product.name}"/>
                    </div>
                    <div class="plp-card__desc-container">
                        <span class="plp-card__desc bgcolor">
                            ${product.description}
                        </span>
                        <a href="" class="plp-card__cta hide-on-tablet">
                            Buy Now @ MRP Rs.${product.price}
                        </a>
                    </div>
                </div>

                <div class="plp-card__content__price">
                    <span class="plp-card-price show-on-desktop">MRP Rs.87</span>
                    
                    <a class="plp-card__cta hide-on-mobile show-on-tablet">
                        Buy Now @ MRP Rs.${product.price}
                    </a>
                
                    <a class="plp-card__cta-tabs show-on-desktop hide-below-desktop">
                        Buy Now
                    </a>

                </div>
            </div>
        </article>
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