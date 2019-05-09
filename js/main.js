// import Products from './model/products';
import { elements } from './view/base';

import Category from './model/home';
import Products from './model/products';

import * as productsView from './view/productsView';
import * as homeView from './view/homeView';
import * as cartView from './view/cartView';


/** Global state of the app
 * - Product Object
 * - Category Object
 */

const state = {};
var cartArr = [];


/**
 * CART Controller
 */

//toggle display cart on click of cart icon in the header

const showCart = () => {
    var cartData = JSON.parse(localStorage.getItem('cartData'));
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

const loadCategories = async () => {
    
    //1) new category object and add to state
    state.category = new Category(); 
    console.log(state.category);

    //2)get the categories and carousel images
    const result = await state.category.getCategories();
    const carousel = await state.category.getCarousel();
    console.log("Fetching categories...");

    //3) render results on UI
    console.log(result);

        //render carousel
        homeView.renderCarousel(carousel);
        //render categories
        homeView.renderResults(result);
}

loadCategories();


/**
 * PLP Controller
 */

const loadProducts = async () => {

    //1) new Products object and add to state
    state.products = new Products();

    //2) get the products
    const result = await state.products.getProducts();
    console.log("Fetching products...");

    //3)render results on UI
    console.log("Products : ");
    console.log(result);
    productsView.renderProducts(result);
}

loadProducts();


const createProductObj = () => {

    const productObj = {
        productID: product.productId,
        productCurrentCount: 1,
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

const addToCart = product => {

    console.log("Data attributes : " + JSON.stringify(product));

    //create a product object to be pushed in cartArr : 
    const productObj = createProductObj();

    //Check if cartArr is not empty
    if(cartArr.length > 0) {

        //check if the product already exists in the cartArr and if it's in stock
        const existingProduct = cartArr.find(function(element) {

            if(element.productID === productObj.productID ) { 
                
                //check if this element is in stock
                if(element.productStock > productObj.productCurrentCount) {
                    
                    //increment the count of product in cart
                    element.productCurrentCount++;
                    console.log("element already exists, Count incremented");
                    return true;

                } else {
                    alert("Oops! The product you are looking for is out of stock!");
                    return false;
                }
                
            } else { // product not already present in cartArr
                return false;
            }
        });
        
        if(!existingProduct) {
            //Add this product to the cartObj array
            cartArr.push(productObj);
        }

    } else {    //cart array is empty
        
        //Add this product to the cartObj array
        cartArr.push(productObj);
    }

    //set cart details in local storage
    localStorage.setItem("cartData", JSON.stringify(cartArr));
            
    var cartData = JSON.parse(localStorage.getItem('cartData'));

    //update cart count in the header
    elements.headerCartCountDiv.textContent = cartData.length + (cartData.length === 1 ? ' item' : ' items');
    //Render products on Cart
    console.log("Rendering cart view");
    // cartView.renderResult(cartData);

    // cartObj.add(product); 
    console.log("Cart Array : ");
    cartArr.forEach(element => {
        console.log("Product ID : " + element.productID);
        console.log("Product count : " + element.productCurrentCount);
    });
}


//code for handling clicking the buy button
var plpPageContent = elements.plpPageContent;

if(plpPageContent) {
    elements.plpPageContent.addEventListener('click', (event) => {

        //check if the element pressed was the 'BUY' button:
        if(event.target.matches('.btn-buy')) {
            
            const product = event.target.closest('.plp-card').dataset;
            // const product = JSON.stringify(event.target.closest('.plp-card').dataset);
            
            //addToCart(product);

            console.log("Data attributes : " + JSON.stringify(product));

            //create a product object to be pushed in cartArr : 
            const productObj = {
                productID: product.productId,
                productCurrentCount: 1,
                productName: product.productName,
                productImageurl: product.productImageurl,
                productDesc: product.productDesc,
                productPrice: product.productPrice,
                productCategory: product.productCategory,
                productSku: product.productSku,
                productStock: product.productStock
            };   

            //Check if cartArr is not empty
            if(cartArr.length > 0) {

                //check if the product already exists in the cartArr and if it's in stock
                const existingProduct = cartArr.find(function(element) {

                    if(element.productID === productObj.productID ) { 
                        //check if this element is in stock
                        if(element.productStock > productObj.productCurrentCount) {
                            //increment the count of product in cart
                            element.productCurrentCount++;
                            console.log("element already exists, Count incremented");
                            return true;
                        } else {
                            alert("Oops! The product you are looking for is out of stock!");
                            return false;
                        }
                    } else { // product not already present in cartArr
                        return false;
                    }
                });
                
                if(!existingProduct) {
                    //Add this product to the cartObj array
                    cartArr.push(productObj);
                }

            } else {    //cart array is empty
                
                //Add this product to the cartObj array
                cartArr.push(productObj);
            }

            localStorage.setItem("cartData", JSON.stringify(cartArr));
                    
            let cartData = JSON.parse(localStorage.getItem('cartData'));

            //update cart count in the header
            elements.headerCartCountDiv.textContent = cartData.length + (cartData.length === 1 ? ' item' : ' items');
            //Render products on Cart
            console.log("Rendering cart view");
            // cartView.renderResult(cartData);

            // cartObj.add(product); 
            console.log("Cart Array : ");
            cartArr.forEach(element => {
                console.log("Product ID : " + element.productID);
                console.log("Product count : " + element.productCurrentCount);
            }); 
        }
    });
}

//elements.headerCartCountDiv.textContent = cartData.length + (cartData.length === 1 ? ' item' : ' items');






















// document.addEventListener('click', function (event) {
//             if (event.target.matches('.add-to-cart')) {
//                 const product = event.target.closest('.plp-container__products__item').dataset;
//                 let products = cartModelObj.add(product);
//                 CartViewObj.setHtml(products);
//             } 
// }
    