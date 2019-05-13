// import Products from './model/products';
import { elements } from './view/base';

import Category from './model/home';
import Products from './model/products';

import * as productsView from './view/productsView';
import * as homeView from './view/homeView';
import * as cartView from './view/cartView';
import HomeController from './controller/homeController';


/** Global state of the app
 * - Product Object
 * - Category Object
 */

const state = {};
var cartData;

/**
 * CART Controller
 */

//toggle display cart on click of cart icon in the header

const showCart = () => {
    cartData = JSON.parse(localStorage.getItem('cartData'));
    //Render products on Cart
    console.log("Rendering cart view");
    cartView.renderResult(cartData);
}

elements.cartIcon.addEventListener('click', function(event) {

    let cartElement =  document.querySelector('.cart-container');

    //toggle hide and show of cart
    if(cartElement.style.display == 'none') {
        cartElement.style.display = 'block';
        elements.cartDynamic.innerHTML = '';
        showCart();
    } else {
        cartElement.style.display = 'none';
    }
        

    //update cart count in the header
    // cartData = JSON.parse(localStorage.getItem('cartData'));
    // elements.headerCartCountDiv.textContent = cartData.length + (cartData.length === 1 ? ' item' : ' items');
    
});


elements.closeBtn.addEventListener('click', function(event){
    //close cart 
    document.querySelector('.cart-container').style.display = 'none';

});

//hide cart on mouse leave of the cart icon in the header
// elements.cartIcon.addEventListener('mouseleave', function(event) {
//     //console.log("YOU MOUSED OVER on cart icon");
//     document.querySelector('.cart-container').style.display = 'none';
// });





/**
 * Home(Categories) controller
 */

export const loadCategories = async () => {return;
    
    //1) create new category object and add to state
    state.category = new Category(); 
    console.log(state.category);

    //2) get the categories and carousel images from
    //   Category object in home.js
    const categories = await state.category.getCategories();
    const carousel = await state.category.getCarousel();
    console.log("Fetching categories...");

    //3) render results on UI
    console.log(`Categories : ${categories}`);
    homeView.renderResults(categories);

    //render carousel
    // homeView.renderCarousel(carousel);
    //render categories
        
}
var homeController = new HomeController(state);
homeController.loadCategories();





/**
 * PLP Controller
 */

const loadProducts = async () => {

    //1) new Products object and add to state
    state.products = new Products();

    //2) get the products
    const products = await state.products.getProducts();
    console.log("Fetching products...");

    //3)render results on UI
    console.log(`Products : ${products}`);
    productsView.renderProducts(products);
}

loadProducts();





/**
 * Hamburger Menu Controller
 */

const toggleDisplay = (el) => {

    el.classList.toggle('hide');
    // if(el.classList.contains('hide')) {
        
    //     /*  1.1. remove class 'hide' if present */
    //     el.classList.remove('hide');

    //     /*  1.2. add class'show' */
    //    el.classList.add('show');

    // } else if (el.classList.contains('show')) {
        
    //     /*  1.1. remove class 'hide' if present */
    //     el.classList.remove('show');

    //     /*  1.2. add class'show' */
    //    el.classList.add('hide');

    // }

}

elements.hamburgerMenuIcon.addEventListener('click', function(event){
    
    /* toggle display of hamburger menu div 
     *  1.check if hamburger menu div has class 'hide'
     *      1.1. remove class 'hide' if present
     *      1.2. add class'show'
     */
    toggleDisplay( elements.hamburgerMenuDiv);

});



const hide = (el) => {

    //check if class exists before removing it
    if (el.classList.contains('show')){
        el.classList.remove('show');
    }
    el.classList.add('hide');

}

const display = (el) => {
    if (el.classList.contains('hide')){
        el.classList.remove('hide');
    }
    el.classList.add('show');
}



elements.cartIconInHamburgerMenu.addEventListener('click', function() {
    
    //1. hide the hamburger menu div
    hide(elements.hamburgerMenuDiv);

    //2. show the cart modal
    display( elements.cartModal);

    
});




/**
 * Add to cart functionality starts --
 */
const createProductObj = (product) => {

    const productObj = {
        productID: product.productId,
        productName: product.productName,
        productImageurl: product.productImageurl,
        productDesc: product.productDesc,
        productPrice: product.productPrice,
        productCategory: product.productCategory,
        productSku: product.productSku,
        productStock: product.productStock
    };  

    return productObj;
}


const productAlreadyInCart = (productToBuy) => {
    
    let productFound;
    var cartArr;

    //Get cart from local storage
    cartArr = JSON.parse(localStorage.getItem('cartData')) || [];
    console.log("cart : " + cartArr);

    // 1. check if cart is not empty
    if(cartArr.length > 0) {
        productFound = cartArr.find(function(cartProduct) {
            return cartProduct.productID === productToBuy.productID ;
        });
    }
    return productFound;   
}



const updateCartInHeader = () => {
    let cartData = JSON.parse(localStorage.getItem("cartData"));
    
    //update cart count in the header
    elements.headerCartCountDiv.textContent = cartData.length + (cartData.length === 1 ? ' item' : ' items');
}



//update product's count in cart
const updateProductInCart = (productObj) => {
 
    //1. fetch value of localstorage's cartData. 
    var cart = JSON.parse(localStorage.getItem("cartData"));
    console.log("Cart BEFORE update: " + cart);

    for(var i = 0; i < cart.length; i++) { 
        //find the element in cart with matching ID of productObj 
        if(cart[i].productID === productObj.productID) {
            //update the count of this product in cart
            cart[i].productCurrentCount = productObj.productCurrentCount;
        }
    }

    //store this updated cart in local storage
    localStorage.setItem('cartData', JSON.stringify(cart));
    console.log("Cart with updated coutn of product : " + JSON.stringify(cart));
}



//add to cart
const addToCart = (productObj) => {

    //1. fetch value of localstorage's cartData. 
    var cart = JSON.parse(localStorage.getItem("cartData")) || [];
    console.log("Cart BEFORE push: " + cart);

    // 3. Add productObj to cart
    cart.push(productObj);
    console.log("Cart AFTER push: " + cart);
   
    // 4. store the updated cart in local storage
    localStorage.setItem("cartData", JSON.stringify(cart));
    console.log("cart Added to LS");
}


/*
 * Code for handling the click event of 'buy' button on Products page
 */
var plpPageContent = elements.plpPageContent;

if(plpPageContent) {

    elements.plpPageContent.addEventListener('click', (event) => {
        
        //check if the element pressed was the 'BUY' button:
        if(event.target.matches('.btn-buy')) {

            /*Get the nearest matching plp card's data atrributes
             *and store that data in product
            */
            const productData = event.target.closest('.plp-card').dataset;
            // const product = JSON.stringify(event.target.closest('.plp-card').dataset);
            
            //create a productObj object from the data attributes in 'productData' variable
            let productObj = createProductObj(productData);



            /*   productCurrentCount: 1
             * Add To Cart
             * 1.) Check if the product is already in cart
             * 2.1.) If product is in cart => in stock => update count [do not add to cart]
             * 2.2.) If product is in cart => not in stock => alert()
             * 3.) If product not in cart => set its count to 1 => add it to cart
             */
           

                //1.) Check if the product is already in cart
                let productInCart = productAlreadyInCart(productObj);

                if(productInCart) {
                    //2.1.) product is in stock
                    if(productInCart.productCurrentCount < productInCart.productStock) {
                        //update count of this product
                        productInCart.productCurrentCount++;
                        productObj.productCurrentCount = productInCart.productCurrentCount;
                        
                        //update the count of this object in local storage's cart
                        updateProductInCart(productObj);
                    } else {
                        //2.2.) product is in stock
                        alert("Oops! this product is out of stock");
                    }

                } else {
                    //3.) product not in cart => set its count to 1 
                    productObj.productCurrentCount = 1;
                    
                    //add this product to cart
                    addToCart(productObj, 'add');
                }

            updateCartInHeader();
        }
    });
}

//elements.headerCartCountDiv.textContent = cartData.length + (cartData.length === 1 ? ' item' : ' items');



var btnMinus = document.querySelector('.js-btn-minus');

if(btnMinus) {
    btnMinus.addEventListener('click', () => {
        console.log('HelloWorld');
    })
}


















// document.addEventListener('click', function (event) {
//             if (event.target.matches('.add-to-cart')) {
//                 const product = event.target.closest('.plp-container__products__item').dataset;
//                 let products = cartModelObj.add(product);
//                 CartViewObj.setHtml(products);
//             } 
// }
    