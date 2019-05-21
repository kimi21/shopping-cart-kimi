import { elements } from './base';
import { productCategory } from './productCategory';

export default class ProductsView {
    
    constructor() {}

    renderComponent() {
        elements.productsContainer.insertAdjacentHTML("afterbegin", this.markup(data)); 
    }

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
                        <span class="plp-card__desc">
                            ${product.description}
                        </span>
                        <a href="" class="plp-card__cta btn btn-primary hide-on-tablet js-btn-buy">
                            Buy Now @ MRP Rs.${product.price}
                        </a>
                    </div>
                </div>

                <div class="plp-card__content__price">
                    <span class="plp-card-price show-on-desktop js-btn-buy">MRP Rs.87</span>
                    
                    <div class="btn-on-tablet">
                        <a class="plp-card__cta  btn btn-primary hide-on-mobile show-on-tablet hide-below-desktop js-btn-buy">
                            Buy Now @ MRP Rs.${product.price}
                        </a>
                    </div>
                
                    <a class="plp-card__cta-tabs btn btn-primary show-on-desktop js-btn-buy">
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
        //render only for category Fruits at first
        // products.forEach(renderProduct);
        //update cart count in the header
       
        this.cartData = JSON.parse(localStorage.getItem('cartData'));
       
        //filter cart data as per category
        const fruitItems = products.filter(function(item) {
            return item.category == productCategory.categoryFruits;
        });

        fruitItems.forEach(this.renderProduct);
    }


    /* Send the selected Product on click of BUY button to the products model
    */
    getProductClicked(event) {
        debugger;
        
        /* --> From the click event of buy btn, get the nearest matching plp card's 
        * data attributes and store that data in productData
        */
        const productData = event.target.closest('.plp-card').dataset;        
        return productData;
    }


    updateHeaderNav(cartLength) {
        elements.headerCartCountDiv.innerHTML = cartLength + ' items';
    }

}
  










