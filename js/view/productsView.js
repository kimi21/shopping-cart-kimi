import { elements } from './base';
import { productCategory } from './productCategory';

export default class ProductsView {
    
    constructor() {}

    renderComponent() {
        elements.productsContainer.insertAdjacentHTML("afterbegin", this.markup(data)); 
    }


    renderProducts ( products) {
              
        this.cartData = JSON.parse(localStorage.getItem('cartData'));
       
        //filter cart data as per category
        const fruitItems = products.filter(function(item) {
            return item.category == productCategory.categoryFruits;
        });

        //fruitItems.forEach(this.renderProduct);
        var productsTemplate = require('../../partials/products.hbs');
        console.log('products', products);
        elements.plpPageContent.innerHTML = productsTemplate(fruitItems);
    }


    
    getProductClicked(event) {

        /* From the click event of buy btn, get the nearest matching plp card's 
        * data attributes and return that data in productData
        */
        const productData = event.target.closest('.plp-card').dataset;        
        return productData;
    }


    updateHeaderNav(cartLength) {
        elements.headerCartCountDiv.innerHTML = cartLength + ' items';
    }

}
  










