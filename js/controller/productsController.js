import Products from "../model/products";
import ProductsView from "../view/productsView";
import { elements } from '../view/base';

export default class ProductsController {
    constructor(state) {
        this.view = new ProductsView();
        this.model = new Products();
        this.state = state;
    }

    initialize() {
        this.view.renderComponent(this.data);
        // this.afterInitialize();
    }

    async loadProducts() {

        //1) create new Products (model) object and add to state
        this.state.Products = this.model; 
        console.log(this.state.Products);
    
        //2) get the products
        const products = await this.model.getProducts();
        console.log("Fetching products!!!!!!...");
    
        //3) render results on UI
        this.view.renderProducts(products);
        console.log(`Products : ${products}`);
        
        //Also update cart length in header
        this.view.updateHeaderNav(this.model.getCartLength());

        debugger;
        // this.buyProduct();
    }

    buyProduct() {
       
        
        if(elements.plpPageContent) {
            // Listen for click event on Plp page's buy button
            elements.plpPageContent.addEventListener('click', (event) => {
            
                let productData;
                
                //2. Get the product which was clicked from the view
                if(event.target.matches('.js-btn-buy')) {
                    productData = this.view.getProductClicked(event); 
                    console.log("productData wich was clicked : " + productData); 
                }
    
                //3. send this product to model for adding this product to cart
                let isProductAdded = this.model.addToCart(productData);
                console.log("Is product added to cart ? " + isProductAdded);
    
                if(isProductAdded) {
                    console.log("Cart Length " + this.model.getCartLength());
                    this.view.updateHeaderNav(this.model.getCartLength());
                }
            });
        }

        
        
    }

} 