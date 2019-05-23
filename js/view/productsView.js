import { elements } from './base';
import { productCategory } from './productCategory';

export default class ProductsView {
    
    constructor() {}

    renderComponent() {
        elements.productsContainer.insertAdjacentHTML("afterbegin", this.markup(data)); 
    }


    renderProducts (products, category) {
        let categoryString;
        this.cartData = JSON.parse(localStorage.getItem('cartData'));

        //map category argument above to category present in productCategory
        Object.keys(productCategory).forEach( e =>  {
            let cat = `${e}`;
            if(cat.toLowerCase().indexOf(category) != -1) {
                categoryString = `${productCategory[e]}`;
                console.log(categoryString);
            }
        });
        
        //filter data as per category
        const categoryProducts = products.filter(function(item) {
            return item.category == categoryString;
        });

        //fruitItems.forEach(this.renderProduct);
        var productsTemplate = require('../../partials/products.hbs');
        console.log('products', products);
        elements.plpPageContent.innerHTML = productsTemplate(categoryProducts);
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
  










