import HomeController from './controller/homeController';
import ProductsController from './controller/productsController';
import CartController from './controller/cartController';
import HamburgerController from './controller/hamburgerController';
import FormController from './controller/formController';


/** Global state of the app
 *  Product Object
 *  Category Object
 */

const state = {};

(function() {
    var hamburgerController = new HamburgerController();
    hamburgerController.eventListener();

    /**
     * CART Controller
     */
    var cartController = new CartController(state);
    cartController.toggleCartDisplayFromHeader();
    cartController.toggleCartDisplayFromHamburgerMenu();
    cartController.cartEventHandler();
    
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
        productsController.initialize();
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