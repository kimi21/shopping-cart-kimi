import Products from "../model/products";
import ProductsView from "../view/productsView";
import Utility from '../Utility/utilities';

import { elements } from '../view/base';
import { productCategory } from '../view/productCategory';


export default class ProductsController {

    constructor(state) {
        this.view = new ProductsView();
        this.model = new Products();
        this.utility = new Utility();
        this.state = state;
    }


    initialize() {
        this.showCategoryFromDropdown();
    }


    cartAnimation() {
        this.utility.show(document.querySelector('.icon'));
        document.querySelector('.icon').classList.add('bounce-in-top');

        setTimeout(() => {
            document.querySelector('.icon').classList.remove("bounceInDown");
            this.utility.hide(document.querySelector('.icon'));
        }, 1000);
    }


    mapCategoryValue() {

    }

    
    async loadProducts(category = 'fruits') {

        //1) create new Products (model) object and add to state
        this.state.Products = this.model; 
    
        //2) get the products
        const products = await this.model.getProducts();
         
        //3) render results on UI
        this.view.renderProducts(products, category);
        
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

                     //3. send this product to model to add this product to cart
                    let isProductAdded = this.model.addToCart(productData);
                    console.log("Is product added to cart ? " + isProductAdded);

                    //4. if the product is added to cart:
                    if(isProductAdded) {
                        //4.1  update cart count in header AND 
                        this.utility.updateHeaderNav(this.utility.getCartLength());
                    }
                    this.cartAnimation();
                }
            });
        }
    }

    showCategoryFromDropdown() {

        if(elements.plpPageContent) {

            //sidemenu click event listener
            document.querySelector('.sidemenu-container').addEventListener('click', (event) => {
                let productData;
                
                //1. Get the category link which was clicked in the sidemenu
                if(event.target.matches('.menu-list-item')) {
                    let category = event.target.dataset;
                    console.log("Category : ", category);
                    
                    //2. send this category to the view
                    this.loadProducts(category.value);
                }
            });

             //dropdown click event listener
             elements.dropdown.addEventListener('change', (event) => {
                 console.log(elements.dropdown.value);
                this.loadProducts(elements.dropdown.value);
            });

        }
    }


} 