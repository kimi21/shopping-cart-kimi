import Products from "../model/products";
import ProductsView from "../view/productsView";
import { elements } from '../view/base';
import Utility from '../Utility/utilities';

export default class ProductsController {

    constructor(state) {
        this.view = new ProductsView();
        this.model = new Products();
        this.utility = new Utility();
        this.state = state;
    }


    initialize() {}

    cartAnimation() {
        this.utility.show(document.querySelector('.icon'));
        document.querySelector('.icon').classList.add('bounce-in-top');

        setTimeout(() => {
            document.querySelector('.icon').classList.remove("bounceInDown");
            this.utility.hide(document.querySelector('.icon'));
        }, 1000);
        

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
        
        //Also update # of products in cart in the header
        this.utility.updateHeaderNav(this.utility.getCartLength());
    }   
    

    buyProduct() {
        
        if(elements.plpPageContent) {
            // Listen for click event on Plp page's buy button
            elements.plpPageContent.addEventListener('click', (event) => {
            
                let productData;
                
                //2. Get the product which was clicked from the view
                if(event.target.matches('.js-btn-buy')) {
                    productData = this.view.getProductClicked(event); 
                    console.log("productData which was clicked : " + productData); 
                }
    
                //3. send this product to model to add this product to cart
                let isProductAdded = this.model.addToCart(productData);
                console.log("Is product added to cart ? " + isProductAdded);
    
                //4. if the product is added to cart:
                if(isProductAdded) {
                    //4.1  update cart count in header AND 
                    this.utility.updateHeaderNav(this.utility.getCartLength());

                    this.cartAnimation();
                    //4.2 woble(animation) on the cart icon in header
                    // elements.cartImgInHeader.classList.add('bounceInDown');
                    // console.log("Classes of cart image : ", elements.cartImgInHeader.classList);
                    // setTimeout(()=> {elements.cartImgInHeader.classList.remove('bounceInDown')}, 1000);
                    // setTimeout(clearInterval(timeout),100);
                }



            });
        }
    }


} 