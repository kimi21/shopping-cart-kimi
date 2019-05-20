// import Products from './model/products';
import { elements } from './view/base';

// import * as cartView from './view/cartView';
import HomeController from './controller/homeController';
import ProductsController from './controller/productsController';
import CartController from './controller/cartController';
import HamburgerController from './controller/hamburgerController';
import FormController from './controller/formController';


/** Global state of the app
 * - Product Object
 * - Category Object
 */

const state = {};
var cartData;

(function() {
    var hamburgerController = new HamburgerController();
    hamburgerController.eventListener();
    
    if (window.location.href.indexOf('home.html') > 0) {
        /**
         * Home(Categories) controller
         */
        console.log("The URL contains home");
        var homeController = new HomeController(state);
        homeController.initialize();
        homeController.loadCategories();

    } else if(window.location.href.indexOf('plp.html') > 0) {
        /**
         * PLP Controller
         */
        console.log("The URL contains plp");
        var productsController = new ProductsController(state);
        productsController.loadProducts();
        productsController.buyProduct();

    } else if(window.location.href.indexOf('index.html') > 0) {
        
        var formController = new FormController(document.forms[0]);
        formController.initialize();
        formController.formEventListener();

    } else if(window.location.href.indexOf('register.html') > 0) {
        var formController = new FormController(document.forms[0]);
        formController.initialize();
        formController.formEventListener();
    } 
})();


/**
 * CART Controller
 */
var cartController = new CartController(state);


cartController.toggleCartDisplayFromHeader();
cartController.toggleCartDisplayFromHamburgerMenu();
cartController.cartEventHandler();








/**
 * Hamburger Controller
 */
// var hamburgerController = new HamburgerController(state);

// debugger;
// hamburgerController.handleClick();









// const showCart = () => {
//     cartData = JSON.parse(localStorage.getItem('cartData'));
//     //Render products on Cart
//     console.log("Rendering cart view");
//     cartView.renderResult(cartData);
// }




// elements.cartIconInHeader.addEventListener('click', function(event) {
//     //cartElement is now cartModal
    
//     elements.cartModal.classList.remove('hide');
//     elements.cartModal.classList.add('show');
//     showCart();
//     //toggle hide and show of cart

//     // if(cartElement.style.display == 'none') {
//     //     cartElement.style.display = 'block';
//     //     elements.cartDynamic.innerHTML = '';
//     //     showCart();
//     // } else {
//     //     cartElement.style.display = 'none';
//     // }
        

//     //update cart count in the header
//     // cartData = JSON.parse(localStorage.getItem('cartData'));
//     // elements.headerCartCountDiv.textContent = cartData.length + (cartData.length === 1 ? ' item' : ' items');
    
// });


// elements.closeBtn.addEventListener('click', function(event){
//     //close cart 
//     document.querySelector('.cart-container').style.display = 'none';

// });



/**
 * Hamburger Menu Controller
 */

// const toggleDisplay = (el) => {

//     el.classList.toggle('hide');
//     // if(el.classList.contains('hide')) {
        
//     //     /*  1.1. remove class 'hide' if present */
//     //     el.classList.remove('hide');

//     //     /*  1.2. add class'show' */
//     //    el.classList.add('show');

//     // } else if (el.classList.contains('show')) {
        
//     //     /*  1.1. remove class 'hide' if present */
//     //     el.classList.remove('show');

//     //     /*  1.2. add class'show' */
//     //    el.classList.add('hide');

//     // }

// }

// // elements.hamburgerMenuIcon.addEventListener('click', function(event){
    
// //     /* toggle display of hamburger menu div 
// //      *  1.check if hamburger menu div has class 'hide'
// //      *      1.1. remove class 'hide' if present
// //      *      1.2. add class'show'
// //      */
// //     toggleDisplay( elements.hamburgerMenuDiv);

// // });
























// // document.addEventListener('click', function (event) {
// //             if (event.target.matches('.add-to-cart')) {
// //                 const product = event.target.closest('.plp-container__products__item').dataset;
// //                 let products = cartModelObj.add(product);
//                 CartViewObj.setHtml(products);
//             } 
// }
    