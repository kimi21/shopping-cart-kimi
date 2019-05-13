/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/controller/homeController.js":
/*!*****************************************!*\
  !*** ./js/controller/homeController.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HomeController; });\n/* harmony import */ var _model_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/home */ \"./js/model/home.js\");\n/* harmony import */ var _view_homeView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/homeView */ \"./js/view/homeView.js\");\n\r\n\r\n\r\nclass HomeController {\r\n    constructor(state) {\r\n        this.view = new _view_homeView__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n        this.model = new _model_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n        this.state = state;\r\n    }\r\n\r\n    async loadCategories() {\r\n    \r\n        //1) create new Home (model) object and add to state\r\n        this.state.Home = this.model; \r\n        console.log(this.state.Home);\r\n    \r\n        //2) get the categories and carousel images from\r\n        //   Home object in home.js\r\n        const categories = await this.model.getCategories();\r\n        const carousel = await this.model.getCarousel();\r\n        console.log(\"Fetching categories...\");\r\n    \r\n        //3) render results on UI\r\n        console.log(`Categories : ${categories}`);\r\n        this.view.renderResults(categories);\r\n    \r\n        //render carousel\r\n        // homeView.renderCarousel(carousel);\r\n        //render categories\r\n        console.log('loadCategories  was called from homeController');\r\n            \r\n    }\r\n    \r\n\r\n} \n\n//# sourceURL=webpack:///./js/controller/homeController.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! exports provided: loadCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadCategories\", function() { return loadCategories; });\n/* harmony import */ var _view_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/base */ \"./js/view/base.js\");\n/* harmony import */ var _model_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/home */ \"./js/model/home.js\");\n/* harmony import */ var _model_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/products */ \"./js/model/products.js\");\n/* harmony import */ var _view_productsView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/productsView */ \"./js/view/productsView.js\");\n/* harmony import */ var _view_homeView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/homeView */ \"./js/view/homeView.js\");\n/* harmony import */ var _view_cartView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/cartView */ \"./js/view/cartView.js\");\n/* harmony import */ var _controller_homeController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controller/homeController */ \"./js/controller/homeController.js\");\n// import Products from './model/products';\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/** Global state of the app\r\n * - Product Object\r\n * - Category Object\r\n */\r\n\r\nconst state = {};\r\nvar cartData;\r\n\r\n/**\r\n * CART Controller\r\n */\r\n\r\n//toggle display cart on click of cart icon in the header\r\n\r\nconst showCart = () => {\r\n    cartData = JSON.parse(localStorage.getItem('cartData'));\r\n    //Render products on Cart\r\n    console.log(\"Rendering cart view\");\r\n    _view_cartView__WEBPACK_IMPORTED_MODULE_5__[\"renderResult\"](cartData);\r\n}\r\n\r\n_view_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].cartIcon.addEventListener('click', function(event) {\r\n\r\n    let cartElement =  document.querySelector('.cart-container');\r\n\r\n    //toggle hide and show of cart\r\n    if(cartElement.style.display == 'none') {\r\n        cartElement.style.display = 'block';\r\n        _view_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].cartDynamic.innerHTML = '';\r\n        showCart();\r\n    } else {\r\n        cartElement.style.display = 'none';\r\n    }\r\n        \r\n\r\n    //update cart count in the header\r\n    // cartData = JSON.parse(localStorage.getItem('cartData'));\r\n    // elements.headerCartCountDiv.textContent = cartData.length + (cartData.length === 1 ? ' item' : ' items');\r\n    \r\n});\r\n\r\n\r\n_view_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].closeBtn.addEventListener('click', function(event){\r\n    //close cart \r\n    document.querySelector('.cart-container').style.display = 'none';\r\n\r\n});\r\n\r\n//hide cart on mouse leave of the cart icon in the header\r\n// elements.cartIcon.addEventListener('mouseleave', function(event) {\r\n//     //console.log(\"YOU MOUSED OVER on cart icon\");\r\n//     document.querySelector('.cart-container').style.display = 'none';\r\n// });\r\n\r\n\r\n\r\n\r\n\r\n/**\r\n * Home(Categories) controller\r\n */\r\n\r\nconst loadCategories = async () => {return;\r\n    \r\n    //1) create new category object and add to state\r\n    state.category = new _model_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"](); \r\n    console.log(state.category);\r\n\r\n    //2) get the categories and carousel images from\r\n    //   Category object in home.js\r\n    const categories = await state.category.getCategories();\r\n    const carousel = await state.category.getCarousel();\r\n    console.log(\"Fetching categories...\");\r\n\r\n    //3) render results on UI\r\n    console.log(`Categories : ${categories}`);\r\n    _view_homeView__WEBPACK_IMPORTED_MODULE_4__[\"renderResults\"](categories);\r\n\r\n    //render carousel\r\n    // homeView.renderCarousel(carousel);\r\n    //render categories\r\n        \r\n}\r\nvar homeController = new _controller_homeController__WEBPACK_IMPORTED_MODULE_6__[\"default\"](state);\r\nhomeController.loadCategories();\r\n\r\n\r\n\r\n\r\n\r\n/**\r\n * PLP Controller\r\n */\r\n\r\nconst loadProducts = async () => {\r\n\r\n    //1) new Products object and add to state\r\n    state.products = new _model_products__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\r\n    //2) get the products\r\n    const products = await state.products.getProducts();\r\n    console.log(\"Fetching products...\");\r\n\r\n    //3)render results on UI\r\n    console.log(`Products : ${products}`);\r\n    _view_productsView__WEBPACK_IMPORTED_MODULE_3__[\"renderProducts\"](products);\r\n}\r\n\r\nloadProducts();\r\n\r\n\r\n\r\n\r\n\r\n/**\r\n * Hamburger Menu Controller\r\n */\r\n\r\nconst toggleDisplay = (el) => {\r\n\r\n    el.classList.toggle('hide');\r\n    // if(el.classList.contains('hide')) {\r\n        \r\n    //     /*  1.1. remove class 'hide' if present */\r\n    //     el.classList.remove('hide');\r\n\r\n    //     /*  1.2. add class'show' */\r\n    //    el.classList.add('show');\r\n\r\n    // } else if (el.classList.contains('show')) {\r\n        \r\n    //     /*  1.1. remove class 'hide' if present */\r\n    //     el.classList.remove('show');\r\n\r\n    //     /*  1.2. add class'show' */\r\n    //    el.classList.add('hide');\r\n\r\n    // }\r\n\r\n}\r\n\r\n_view_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].hamburgerMenuIcon.addEventListener('click', function(event){\r\n    \r\n    /* toggle display of hamburger menu div \r\n     *  1.check if hamburger menu div has class 'hide'\r\n     *      1.1. remove class 'hide' if present\r\n     *      1.2. add class'show'\r\n     */\r\n    toggleDisplay( _view_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].hamburgerMenuDiv);\r\n\r\n});\r\n\r\n\r\n\r\nconst hide = (el) => {\r\n\r\n    //check if class exists before removing it\r\n    if (el.classList.contains('show')){\r\n        el.classList.remove('show');\r\n    }\r\n    el.classList.add('hide');\r\n\r\n}\r\n\r\nconst display = (el) => {\r\n    if (el.classList.contains('hide')){\r\n        el.classList.remove('hide');\r\n    }\r\n    el.classList.add('show');\r\n}\r\n\r\n\r\n\r\n_view_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].cartIconInHamburgerMenu.addEventListener('click', function() {\r\n    \r\n    //1. hide the hamburger menu div\r\n    hide(_view_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].hamburgerMenuDiv);\r\n\r\n    //2. show the cart modal\r\n    display( _view_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].cartModal);\r\n\r\n    \r\n});\r\n\r\n\r\n\r\n\r\n/**\r\n * Add to cart functionality starts --\r\n */\r\nconst createProductObj = (product) => {\r\n\r\n    const productObj = {\r\n        productID: product.productId,\r\n        productName: product.productName,\r\n        productImageurl: product.productImageurl,\r\n        productDesc: product.productDesc,\r\n        productPrice: product.productPrice,\r\n        productCategory: product.productCategory,\r\n        productSku: product.productSku,\r\n        productStock: product.productStock\r\n    };  \r\n\r\n    return productObj;\r\n}\r\n\r\n\r\nconst productAlreadyInCart = (productToBuy) => {\r\n    \r\n    let productFound;\r\n    var cartArr;\r\n\r\n    //Get cart from local storage\r\n    cartArr = JSON.parse(localStorage.getItem('cartData')) || [];\r\n    console.log(\"cart : \" + cartArr);\r\n\r\n    // 1. check if cart is not empty\r\n    if(cartArr.length > 0) {\r\n        productFound = cartArr.find(function(cartProduct) {\r\n            return cartProduct.productID === productToBuy.productID ;\r\n        });\r\n    }\r\n    return productFound;   \r\n}\r\n\r\n\r\n\r\nconst updateCartInHeader = () => {\r\n    let cartData = JSON.parse(localStorage.getItem(\"cartData\"));\r\n    \r\n    //update cart count in the header\r\n    _view_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].headerCartCountDiv.textContent = cartData.length + (cartData.length === 1 ? ' item' : ' items');\r\n}\r\n\r\n\r\n\r\n//update product's count in cart\r\nconst updateProductInCart = (productObj) => {\r\n \r\n    //1. fetch value of localstorage's cartData. \r\n    var cart = JSON.parse(localStorage.getItem(\"cartData\"));\r\n    console.log(\"Cart BEFORE update: \" + cart);\r\n\r\n    for(var i = 0; i < cart.length; i++) { \r\n        //find the element in cart with matching ID of productObj \r\n        if(cart[i].productID === productObj.productID) {\r\n            //update the count of this product in cart\r\n            cart[i].productCurrentCount = productObj.productCurrentCount;\r\n        }\r\n    }\r\n\r\n    //store this updated cart in local storage\r\n    localStorage.setItem('cartData', JSON.stringify(cart));\r\n    console.log(\"Cart with updated coutn of product : \" + JSON.stringify(cart));\r\n}\r\n\r\n\r\n\r\n//add to cart\r\nconst addToCart = (productObj) => {\r\n\r\n    //1. fetch value of localstorage's cartData. \r\n    var cart = JSON.parse(localStorage.getItem(\"cartData\")) || [];\r\n    console.log(\"Cart BEFORE push: \" + cart);\r\n\r\n    // 3. Add productObj to cart\r\n    cart.push(productObj);\r\n    console.log(\"Cart AFTER push: \" + cart);\r\n   \r\n    // 4. store the updated cart in local storage\r\n    localStorage.setItem(\"cartData\", JSON.stringify(cart));\r\n    console.log(\"cart Added to LS\");\r\n}\r\n\r\n\r\n/*\r\n * Code for handling the click event of 'buy' button on Products page\r\n */\r\nvar plpPageContent = _view_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].plpPageContent;\r\n\r\nif(plpPageContent) {\r\n\r\n    _view_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].plpPageContent.addEventListener('click', (event) => {\r\n        \r\n        //check if the element pressed was the 'BUY' button:\r\n        if(event.target.matches('.btn-buy')) {\r\n\r\n            /*Get the nearest matching plp card's data atrributes\r\n             *and store that data in product\r\n            */\r\n            const productData = event.target.closest('.plp-card').dataset;\r\n            // const product = JSON.stringify(event.target.closest('.plp-card').dataset);\r\n            \r\n            //create a productObj object from the data attributes in 'productData' variable\r\n            let productObj = createProductObj(productData);\r\n\r\n\r\n\r\n            /*   productCurrentCount: 1\r\n             * Add To Cart\r\n             * 1.) Check if the product is already in cart\r\n             * 2.1.) If product is in cart => in stock => update count [do not add to cart]\r\n             * 2.2.) If product is in cart => not in stock => alert()\r\n             * 3.) If product not in cart => set its count to 1 => add it to cart\r\n             */\r\n           \r\n\r\n                //1.) Check if the product is already in cart\r\n                let productInCart = productAlreadyInCart(productObj);\r\n\r\n                if(productInCart) {\r\n                    //2.1.) product is in stock\r\n                    if(productInCart.productCurrentCount < productInCart.productStock) {\r\n                        //update count of this product\r\n                        productInCart.productCurrentCount++;\r\n                        productObj.productCurrentCount = productInCart.productCurrentCount;\r\n                        \r\n                        //update the count of this object in local storage's cart\r\n                        updateProductInCart(productObj);\r\n                    } else {\r\n                        //2.2.) product is in stock\r\n                        alert(\"Oops! this product is out of stock\");\r\n                    }\r\n\r\n                } else {\r\n                    //3.) product not in cart => set its count to 1 \r\n                    productObj.productCurrentCount = 1;\r\n                    \r\n                    //add this product to cart\r\n                    addToCart(productObj, 'add');\r\n                }\r\n\r\n            updateCartInHeader();\r\n        }\r\n    });\r\n}\r\n\r\n//elements.headerCartCountDiv.textContent = cartData.length + (cartData.length === 1 ? ' item' : ' items');\r\n\r\n\r\n\r\nvar btnMinus = document.querySelector('.js-btn-minus');\r\n\r\nif(btnMinus) {\r\n    btnMinus.addEventListener('click', () => {\r\n        console.log('HelloWorld');\r\n    })\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// document.addEventListener('click', function (event) {\r\n//             if (event.target.matches('.add-to-cart')) {\r\n//                 const product = event.target.closest('.plp-container__products__item').dataset;\r\n//                 let products = cartModelObj.add(product);\r\n//                 CartViewObj.setHtml(products);\r\n//             } \r\n// }\r\n    \n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/model/home.js":
/*!**************************!*\
  !*** ./js/model/home.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nclass Home {\r\n    constructor() {}\r\n\r\n    async getCategories() {\r\n        try {\r\n            const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(`./server/categories/index.get.json`);\r\n            // const result = res.data;\r\n            return res.data;\r\n        } catch (err) {\r\n            alert(err);\r\n        }\r\n    }  \r\n    \r\n    async getCarousel() {\r\n        try {\r\n            const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(`./server/banners/index.get.json`);\r\n            return res.data;\r\n        } catch(err) {\r\n            alert(err);\r\n        }\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack:///./js/model/home.js?");

/***/ }),

/***/ "./js/model/products.js":
/*!******************************!*\
  !*** ./js/model/products.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Products; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nclass Products {\r\n    constructor() {\r\n        // this.query = query;\r\n    }\r\n    async getProducts(){\r\n        try {\r\n            const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(`../server/products/index.get.json`);\r\n            return res.data;\r\n        } catch (err) {\r\n            alert(err);\r\n        }\r\n    }    \r\n}\r\n\n\n//# sourceURL=webpack:///./js/model/products.js?");

/***/ }),

/***/ "./js/view/base.js":
/*!*************************!*\
  !*** ./js/view/base.js ***!
  \*************************/
/*! exports provided: elements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elements\", function() { return elements; });\nconst elements = {\r\n    homePageContent: document.querySelector('.js-home'),\r\n    categoryCards: document.querySelectorAll('.js-home .js-home-card'),\r\n    plpPageContent: document.querySelector('#fruits'),\r\n    cartIcon: document.querySelector('.nav--right__cart-link'),\r\n    countOnCart: document.querySelector('.cart-head-light'),\r\n    cartDynamic: document.querySelector('.cart-dynamic'),\r\n    headerCartCountDiv: document.querySelector('.js-cart-count'),\r\n    closeBtn: document.querySelector('.btn-close'),\r\n    cartBillAmount: document.querySelector('.cart-bottom-amount'),\r\n    hamburgerMenuIcon: document.querySelector('.nav--right__hamburger-menu'),\r\n    hamburgerMenuDiv: document.querySelector('.hamburger-menu-div'),\r\n    cartIconInHamburgerMenu : document.querySelector('.hamburger-menu-body__cart-link'),\r\n    cartModal: document.querySelector('cart')\r\n};\r\n\r\n\r\n\r\n  \r\n\n\n//# sourceURL=webpack:///./js/view/base.js?");

/***/ }),

/***/ "./js/view/cartView.js":
/*!*****************************!*\
  !*** ./js/view/cartView.js ***!
  \*****************************/
/*! exports provided: renderResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderResult\", function() { return renderResult; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./js/view/base.js\");\n\r\n\r\nvar cartTotalCount;\r\n\r\nconst renderProductOnCart = product => {\r\n\r\n    const markup = `\r\n        <div class=\"cart-content__item\">\r\n            <div class=\"cart-item-img\">\r\n                <img src=\"./.${product.productImageurl}\" />\r\n            </div>                        \r\n            <div class=\"cart-item-desc\">\r\n                <div class=\"\">\r\n                    <span class=\"cart-item-desc-title\">${product.productName}</span>\r\n                </div>\r\n                <div class=\"cart-item-info\">\r\n                    <div class=\"cart-item-info-left\">\r\n                        <i class=\"fa fa-minus fa-cart-tablet js-btn-minus\" aria-hidden=\"true\"></i>\r\n                        <span class=\"cart-item-qauntity\">${product.productCurrentCount}</span>\r\n                        <i class=\"fa fa-plus fa-cart-tablet js-btn-add\" aria-hidden=\"true\"></i>\r\n                        \r\n                        <span class=\"cart-item-price\">\r\n                            <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                            Rs. ${product.productPrice}\r\n                        </span>\r\n                    </div>\r\n                    \r\n                    <div class=\"cart-item-info-right\">\r\n                        <span class=\"\">Rs. ${product.productCurrentCount * product.productPrice}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    `;\r\n\r\n    if(_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].countOnCart)\r\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].countOnCart.textContent = \"( \" + cartTotalCount + (cartTotalCount === 1 ? ' item )' : ' items )');\r\n    if(_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].cartDynamic)\r\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].cartDynamic.insertAdjacentHTML('beforeend', markup);\r\n    if(_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].cartBillAmount)\r\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].cartBillAmount.textContent = `Rs. ${product.productCurrentCount * product.productPrice}`;\r\n}\r\n\r\n\r\nconst renderResult = products => {\r\n    \r\n    cartTotalCount = products.length;\r\n    console.log(\"Products in cart : \" + cartTotalCount);\r\n    console.log(\"In CART VIEW PRODUCTS : : : \" + JSON.stringify(products));\r\n    products.forEach(renderProductOnCart);\r\n    \r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/view/cartView.js?");

/***/ }),

/***/ "./js/view/homeView.js":
/*!*****************************!*\
  !*** ./js/view/homeView.js ***!
  \*****************************/
/*! exports provided: default, renderCarousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HomeView; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCarousel\", function() { return renderCarousel; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./js/view/base.js\");\n\r\n\r\nclass HomeView {\r\n    constructor() {}\r\n\r\n    rendercategory (category ) {\r\n        const markup = `\r\n            <section class=\"card card-shadow js-home-card\" data-category=\"fruits\">\r\n                <div class=\"card__img\">\r\n                    <img src=\"./.${category.imageUrl}\" alt = \"${category.name}\"/>\r\n                </div>\r\n    \r\n                <div class=\"card__content\">\r\n                    <h2>${category.name}</h2>\r\n                    <span>${category.description}</span>\r\n                    <a href=\"#\" class=\"btn card__content__btn\">\r\n                        Explore ${category.name}\r\n                    </a>\r\n                </div>\r\n            </section>\r\n        `;\r\n        \r\n        if (_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].homePageContent)\r\n            _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].homePageContent.insertAdjacentHTML('beforeend', markup);\r\n    }\r\n\r\n    renderResults  (categories) {\r\n        //update cart count in the header\r\n        var cartData;\r\n        cartData = JSON.parse(localStorage.getItem('cartData'));\r\n        if (cartData)\r\n            _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].headerCartCountDiv.textContent = cartData.length + (cartData.length === 1 ? ' item' : ' items');\r\n    \r\n        categories.forEach(this.rendercategory);\r\n    }\r\n}\r\n\r\n//Renders each category one by one\r\n\r\n\r\n\r\nconst renderCarousel = carouselImages => {\r\n    // carouselImages.forEach(renderCarouselImage);\r\n    // carouselImages.(renderCarouselImage);\r\n    // carouselImages[0].(renderCarouselImage);\r\n\r\n    const carouselImage = carouselImages[0];\r\n\r\n    const markup = `\r\n            <div id=\"main-carousel\" class=\"main__carousel\" >\r\n                <img src=\"./.${carouselImage.bannerImageUrl}\" \r\n                    alt=\"${carouselImage.bannerImageAlt}\"\r\n                    class=\"main__carousel__img\" />\r\n            </div>\r\n        `;\r\n    \r\n    if (_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].homePageContent)\r\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].homePageContent.insertAdjacentHTML('afterbegin', markup);\r\n}\n\n//# sourceURL=webpack:///./js/view/homeView.js?");

/***/ }),

/***/ "./js/view/miscData.js":
/*!*****************************!*\
  !*** ./js/view/miscData.js ***!
  \*****************************/
/*! exports provided: miscData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"miscData\", function() { return miscData; });\nconst miscData = {\r\n    categoryFruits: \"5b6899953d1a866534f516e2\",\r\n    categoryBakery: \"5b6899953d1a866534f516e2\",\r\n    categoryBeverages: \"5b6899953d1a866534f516e2\",\r\n    categoryBeauty: \"5b6899953d1a866534f516e2\",\r\n    categoryBaby: \"5b6899683d1a866534f516e0\"\r\n};\n\n//# sourceURL=webpack:///./js/view/miscData.js?");

/***/ }),

/***/ "./js/view/productsView.js":
/*!*********************************!*\
  !*** ./js/view/productsView.js ***!
  \*********************************/
/*! exports provided: default, renderProduct, renderProducts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductsVeiw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProduct\", function() { return renderProduct; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProducts\", function() { return renderProducts; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./js/view/base.js\");\n/* harmony import */ var _miscData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./miscData */ \"./js/view/miscData.js\");\n\r\n\r\n\r\nclass ProductsVeiw {\r\n    constructor() {}\r\n\r\n    renderProduct (product) {\r\n        const markup =  `\r\n        <article class=\"plp-card\" data-product-id=\"${product.id}\" data-product-name=\"${product.name}\"\r\n        data-product-imageUrl=\"${product.imageURL}\" data-product-desc=\"${product.description}\" \r\n        data-product-price=\"${product.price}\" data-product-category=\"${product.category}\" \r\n        data-product-stock=\"${product.stock}\" data-product-sku=\"${product.sku}\">\r\n            <h2>${product.name}</h2>\r\n        \r\n            <div class=\"plp-card__content\">\r\n                <div class=\"plp-card__content__img-text\">\r\n                    <div class=\"plp-card__img\">\r\n                        <img src=\"./.${product.imageURL}\" alt=\"${product.name}\"/>\r\n                    </div>\r\n                    <div class=\"plp-card__desc-container\">\r\n                        <span class=\"plp-card__desc bgcolor\">\r\n                            ${product.description}\r\n                        </span>\r\n                        <a href=\"\" class=\"plp-card__cta hide-on-tablet\">\r\n                            Buy Now @ MRP Rs.${product.price}\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"plp-card__content__price\">\r\n                    <span class=\"plp-card-price show-on-desktop\">MRP Rs.87</span>\r\n                    \r\n                    <a class=\"plp-card__cta hide-on-mobile show-on-tablet\">\r\n                        Buy Now @ MRP Rs.${product.price}\r\n                    </a>\r\n                \r\n                    <a class=\"plp-card__cta-tabs show-on-desktop hide-below-desktop\">\r\n                        Buy Now\r\n                    </a>\r\n\r\n                </div>\r\n            </div>\r\n        </article>\r\n    `;\r\n\r\n    if(_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].plpPageContent)\r\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].plpPageContent.insertAdjacentHTML('beforeend', markup);\r\n    }\r\n\r\n    renderProducts ( products) {\r\n        //render only for category Fruits\r\n        // products.forEach(renderProduct);\r\n    \r\n        //update cart count in the header\r\n        var cartData;\r\n        cartData = JSON.parse(localStorage.getItem('cartData'));\r\n    \r\n        if(cartData)\r\n            _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].headerCartCountDiv.textContent = cartData.length + (cartData.length === 1 ? ' item' : ' items');\r\n    \r\n        const fruitItems = products.filter(function(item) {\r\n            return item.category == _miscData__WEBPACK_IMPORTED_MODULE_1__[\"miscData\"].categoryFruits;\r\n        });\r\n    \r\n        fruitItems.forEach(renderProduct);\r\n    }\r\n\r\n}\r\n\r\nconst renderProduct = product => {\r\n    const markup =  `\r\n        <article class=\"plp-card\" data-product-id=\"${product.id}\" data-product-name=\"${product.name}\"\r\n        data-product-imageUrl=\"${product.imageURL}\" data-product-desc=\"${product.description}\" \r\n        data-product-price=\"${product.price}\" data-product-category=\"${product.category}\" \r\n        data-product-stock=\"${product.stock}\" data-product-sku=\"${product.sku}\">\r\n            <h2>${product.name}</h2>\r\n        \r\n            <div class=\"plp-card__content\">\r\n                <div class=\"plp-card__content__img-text\">\r\n                    <div class=\"plp-card__img\">\r\n                        <img src=\"./.${product.imageURL}\" alt=\"${product.name}\"/>\r\n                    </div>\r\n                    <div class=\"plp-card__desc-container\">\r\n                        <span class=\"plp-card__desc bgcolor\">\r\n                            ${product.description}\r\n                        </span>\r\n                        <a href=\"\" class=\"plp-card__cta hide-on-tablet\">\r\n                            Buy Now @ MRP Rs.${product.price}\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"plp-card__content__price\">\r\n                    <span class=\"plp-card-price show-on-desktop\">MRP Rs.87</span>\r\n                    \r\n                    <a class=\"plp-card__cta hide-on-mobile show-on-tablet\">\r\n                        Buy Now @ MRP Rs.${product.price}\r\n                    </a>\r\n                \r\n                    <a class=\"plp-card__cta-tabs show-on-desktop hide-below-desktop\">\r\n                        Buy Now\r\n                    </a>\r\n\r\n                </div>\r\n            </div>\r\n        </article>\r\n    `;\r\n\r\n    if(_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].plpPageContent)\r\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].plpPageContent.insertAdjacentHTML('beforeend', markup);\r\n}\r\n\r\nconst renderProducts = products => {\r\n    //render only for category Fruits\r\n    // products.forEach(renderProduct);\r\n\r\n    //update cart count in the header\r\n    var cartData;\r\n    cartData = JSON.parse(localStorage.getItem('cartData'));\r\n\r\n    if(cartData)\r\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].headerCartCountDiv.textContent = cartData.length + (cartData.length === 1 ? ' item' : ' items');\r\n\r\n    const fruitItems = products.filter(function(item) {\r\n        return item.category == _miscData__WEBPACK_IMPORTED_MODULE_1__[\"miscData\"].categoryFruits;\r\n    });\r\n\r\n    fruitItems.forEach(renderProduct);\r\n}\n\n//# sourceURL=webpack:///./js/view/productsView.js?");

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./lib/axios */ \"./node_modules/axios/lib/axios.js\");\n\n//# sourceURL=webpack:///./node_modules/axios/index.js?");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar settle = __webpack_require__(/*! ./../core/settle */ \"./node_modules/axios/lib/core/settle.js\");\nvar buildURL = __webpack_require__(/*! ./../helpers/buildURL */ \"./node_modules/axios/lib/helpers/buildURL.js\");\nvar parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ \"./node_modules/axios/lib/helpers/parseHeaders.js\");\nvar isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ \"./node_modules/axios/lib/helpers/isURLSameOrigin.js\");\nvar createError = __webpack_require__(/*! ../core/createError */ \"./node_modules/axios/lib/core/createError.js\");\nvar btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(/*! ./../helpers/btoa */ \"./node_modules/axios/lib/helpers/btoa.js\");\n\nmodule.exports = function xhrAdapter(config) {\n  return new Promise(function dispatchXhrRequest(resolve, reject) {\n    var requestData = config.data;\n    var requestHeaders = config.headers;\n\n    if (utils.isFormData(requestData)) {\n      delete requestHeaders['Content-Type']; // Let the browser set it\n    }\n\n    var request = new XMLHttpRequest();\n    var loadEvent = 'onreadystatechange';\n    var xDomain = false;\n\n    // For IE 8/9 CORS support\n    // Only supports POST and GET calls and doesn't returns the response headers.\n    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.\n    if ( true &&\n        typeof window !== 'undefined' &&\n        window.XDomainRequest && !('withCredentials' in request) &&\n        !isURLSameOrigin(config.url)) {\n      request = new window.XDomainRequest();\n      loadEvent = 'onload';\n      xDomain = true;\n      request.onprogress = function handleProgress() {};\n      request.ontimeout = function handleTimeout() {};\n    }\n\n    // HTTP basic authentication\n    if (config.auth) {\n      var username = config.auth.username || '';\n      var password = config.auth.password || '';\n      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);\n    }\n\n    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);\n\n    // Set the request timeout in MS\n    request.timeout = config.timeout;\n\n    // Listen for ready state\n    request[loadEvent] = function handleLoad() {\n      if (!request || (request.readyState !== 4 && !xDomain)) {\n        return;\n      }\n\n      // The request errored out and we didn't get a response, this will be\n      // handled by onerror instead\n      // With one exception: request that using file: protocol, most browsers\n      // will return status as 0 even though it's a successful request\n      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {\n        return;\n      }\n\n      // Prepare the response\n      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;\n      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;\n      var response = {\n        data: responseData,\n        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)\n        status: request.status === 1223 ? 204 : request.status,\n        statusText: request.status === 1223 ? 'No Content' : request.statusText,\n        headers: responseHeaders,\n        config: config,\n        request: request\n      };\n\n      settle(resolve, reject, response);\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle low level network errors\n    request.onerror = function handleError() {\n      // Real errors are hidden from us by the browser\n      // onerror should only fire if it's a network error\n      reject(createError('Network Error', config, null, request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Handle timeout\n    request.ontimeout = function handleTimeout() {\n      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',\n        request));\n\n      // Clean up request\n      request = null;\n    };\n\n    // Add xsrf header\n    // This is only done if running in a standard browser environment.\n    // Specifically not if we're in a web worker, or react-native.\n    if (utils.isStandardBrowserEnv()) {\n      var cookies = __webpack_require__(/*! ./../helpers/cookies */ \"./node_modules/axios/lib/helpers/cookies.js\");\n\n      // Add xsrf header\n      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?\n          cookies.read(config.xsrfCookieName) :\n          undefined;\n\n      if (xsrfValue) {\n        requestHeaders[config.xsrfHeaderName] = xsrfValue;\n      }\n    }\n\n    // Add headers to the request\n    if ('setRequestHeader' in request) {\n      utils.forEach(requestHeaders, function setRequestHeader(val, key) {\n        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {\n          // Remove Content-Type if data is undefined\n          delete requestHeaders[key];\n        } else {\n          // Otherwise add header to the request\n          request.setRequestHeader(key, val);\n        }\n      });\n    }\n\n    // Add withCredentials to request if needed\n    if (config.withCredentials) {\n      request.withCredentials = true;\n    }\n\n    // Add responseType to request if needed\n    if (config.responseType) {\n      try {\n        request.responseType = config.responseType;\n      } catch (e) {\n        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.\n        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.\n        if (config.responseType !== 'json') {\n          throw e;\n        }\n      }\n    }\n\n    // Handle progress if needed\n    if (typeof config.onDownloadProgress === 'function') {\n      request.addEventListener('progress', config.onDownloadProgress);\n    }\n\n    // Not all browsers support upload events\n    if (typeof config.onUploadProgress === 'function' && request.upload) {\n      request.upload.addEventListener('progress', config.onUploadProgress);\n    }\n\n    if (config.cancelToken) {\n      // Handle cancellation\n      config.cancelToken.promise.then(function onCanceled(cancel) {\n        if (!request) {\n          return;\n        }\n\n        request.abort();\n        reject(cancel);\n        // Clean up request\n        request = null;\n      });\n    }\n\n    if (requestData === undefined) {\n      requestData = null;\n    }\n\n    // Send the request\n    request.send(requestData);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/adapters/xhr.js?");

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/axios/lib/utils.js\");\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/axios/lib/helpers/bind.js\");\nvar Axios = __webpack_require__(/*! ./core/Axios */ \"./node_modules/axios/lib/core/Axios.js\");\nvar defaults = __webpack_require__(/*! ./defaults */ \"./node_modules/axios/lib/defaults.js\");\n\n/**\n * Create an instance of Axios\n *\n * @param {Object} defaultConfig The default config for the instance\n * @return {Axios} A new instance of Axios\n */\nfunction createInstance(defaultConfig) {\n  var context = new Axios(defaultConfig);\n  var instance = bind(Axios.prototype.request, context);\n\n  // Copy axios.prototype to instance\n  utils.extend(instance, Axios.prototype, context);\n\n  // Copy context to instance\n  utils.extend(instance, context);\n\n  return instance;\n}\n\n// Create the default instance to be exported\nvar axios = createInstance(defaults);\n\n// Expose Axios class to allow class inheritance\naxios.Axios = Axios;\n\n// Factory for creating new instances\naxios.create = function create(instanceConfig) {\n  return createInstance(utils.merge(defaults, instanceConfig));\n};\n\n// Expose Cancel & CancelToken\naxios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\naxios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ \"./node_modules/axios/lib/cancel/CancelToken.js\");\naxios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ \"./node_modules/axios/lib/cancel/isCancel.js\");\n\n// Expose all/spread\naxios.all = function all(promises) {\n  return Promise.all(promises);\n};\naxios.spread = __webpack_require__(/*! ./helpers/spread */ \"./node_modules/axios/lib/helpers/spread.js\");\n\nmodule.exports = axios;\n\n// Allow use of default import syntax in TypeScript\nmodule.exports.default = axios;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/axios.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * A `Cancel` is an object that is thrown when an operation is canceled.\n *\n * @class\n * @param {string=} message The message.\n */\nfunction Cancel(message) {\n  this.message = message;\n}\n\nCancel.prototype.toString = function toString() {\n  return 'Cancel' + (this.message ? ': ' + this.message : '');\n};\n\nCancel.prototype.__CANCEL__ = true;\n\nmodule.exports = Cancel;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/Cancel.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Cancel = __webpack_require__(/*! ./Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\n\n/**\n * A `CancelToken` is an object that can be used to request cancellation of an operation.\n *\n * @class\n * @param {Function} executor The executor function.\n */\nfunction CancelToken(executor) {\n  if (typeof executor !== 'function') {\n    throw new TypeError('executor must be a function.');\n  }\n\n  var resolvePromise;\n  this.promise = new Promise(function promiseExecutor(resolve) {\n    resolvePromise = resolve;\n  });\n\n  var token = this;\n  executor(function cancel(message) {\n    if (token.reason) {\n      // Cancellation has already been requested\n      return;\n    }\n\n    token.reason = new Cancel(message);\n    resolvePromise(token.reason);\n  });\n}\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nCancelToken.prototype.throwIfRequested = function throwIfRequested() {\n  if (this.reason) {\n    throw this.reason;\n  }\n};\n\n/**\n * Returns an object that contains a new `CancelToken` and a function that, when called,\n * cancels the `CancelToken`.\n */\nCancelToken.source = function source() {\n  var cancel;\n  var token = new CancelToken(function executor(c) {\n    cancel = c;\n  });\n  return {\n    token: token,\n    cancel: cancel\n  };\n};\n\nmodule.exports = CancelToken;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/CancelToken.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function isCancel(value) {\n  return !!(value && value.__CANCEL__);\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/isCancel.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar defaults = __webpack_require__(/*! ./../defaults */ \"./node_modules/axios/lib/defaults.js\");\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ \"./node_modules/axios/lib/core/InterceptorManager.js\");\nvar dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ \"./node_modules/axios/lib/core/dispatchRequest.js\");\n\n/**\n * Create a new instance of Axios\n *\n * @param {Object} instanceConfig The default config for the instance\n */\nfunction Axios(instanceConfig) {\n  this.defaults = instanceConfig;\n  this.interceptors = {\n    request: new InterceptorManager(),\n    response: new InterceptorManager()\n  };\n}\n\n/**\n * Dispatch a request\n *\n * @param {Object} config The config specific for this request (merged with this.defaults)\n */\nAxios.prototype.request = function request(config) {\n  /*eslint no-param-reassign:0*/\n  // Allow for axios('example/url'[, config]) a la fetch API\n  if (typeof config === 'string') {\n    config = utils.merge({\n      url: arguments[0]\n    }, arguments[1]);\n  }\n\n  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);\n  config.method = config.method.toLowerCase();\n\n  // Hook up interceptors middleware\n  var chain = [dispatchRequest, undefined];\n  var promise = Promise.resolve(config);\n\n  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {\n    chain.unshift(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {\n    chain.push(interceptor.fulfilled, interceptor.rejected);\n  });\n\n  while (chain.length) {\n    promise = promise.then(chain.shift(), chain.shift());\n  }\n\n  return promise;\n};\n\n// Provide aliases for supported request methods\nutils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, config) {\n    return this.request(utils.merge(config || {}, {\n      method: method,\n      url: url\n    }));\n  };\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  /*eslint func-names:0*/\n  Axios.prototype[method] = function(url, data, config) {\n    return this.request(utils.merge(config || {}, {\n      method: method,\n      url: url,\n      data: data\n    }));\n  };\n});\n\nmodule.exports = Axios;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/Axios.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nfunction InterceptorManager() {\n  this.handlers = [];\n}\n\n/**\n * Add a new interceptor to the stack\n *\n * @param {Function} fulfilled The function to handle `then` for a `Promise`\n * @param {Function} rejected The function to handle `reject` for a `Promise`\n *\n * @return {Number} An ID used to remove interceptor later\n */\nInterceptorManager.prototype.use = function use(fulfilled, rejected) {\n  this.handlers.push({\n    fulfilled: fulfilled,\n    rejected: rejected\n  });\n  return this.handlers.length - 1;\n};\n\n/**\n * Remove an interceptor from the stack\n *\n * @param {Number} id The ID that was returned by `use`\n */\nInterceptorManager.prototype.eject = function eject(id) {\n  if (this.handlers[id]) {\n    this.handlers[id] = null;\n  }\n};\n\n/**\n * Iterate over all the registered interceptors\n *\n * This method is particularly useful for skipping over any\n * interceptors that may have become `null` calling `eject`.\n *\n * @param {Function} fn The function to call for each interceptor\n */\nInterceptorManager.prototype.forEach = function forEach(fn) {\n  utils.forEach(this.handlers, function forEachHandler(h) {\n    if (h !== null) {\n      fn(h);\n    }\n  });\n};\n\nmodule.exports = InterceptorManager;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/InterceptorManager.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar enhanceError = __webpack_require__(/*! ./enhanceError */ \"./node_modules/axios/lib/core/enhanceError.js\");\n\n/**\n * Create an Error with the specified message, config, error code, request and response.\n *\n * @param {string} message The error message.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The created error.\n */\nmodule.exports = function createError(message, config, code, request, response) {\n  var error = new Error(message);\n  return enhanceError(error, config, code, request, response);\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/createError.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\nvar transformData = __webpack_require__(/*! ./transformData */ \"./node_modules/axios/lib/core/transformData.js\");\nvar isCancel = __webpack_require__(/*! ../cancel/isCancel */ \"./node_modules/axios/lib/cancel/isCancel.js\");\nvar defaults = __webpack_require__(/*! ../defaults */ \"./node_modules/axios/lib/defaults.js\");\nvar isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ \"./node_modules/axios/lib/helpers/isAbsoluteURL.js\");\nvar combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ \"./node_modules/axios/lib/helpers/combineURLs.js\");\n\n/**\n * Throws a `Cancel` if cancellation has been requested.\n */\nfunction throwIfCancellationRequested(config) {\n  if (config.cancelToken) {\n    config.cancelToken.throwIfRequested();\n  }\n}\n\n/**\n * Dispatch a request to the server using the configured adapter.\n *\n * @param {object} config The config that is to be used for the request\n * @returns {Promise} The Promise to be fulfilled\n */\nmodule.exports = function dispatchRequest(config) {\n  throwIfCancellationRequested(config);\n\n  // Support baseURL config\n  if (config.baseURL && !isAbsoluteURL(config.url)) {\n    config.url = combineURLs(config.baseURL, config.url);\n  }\n\n  // Ensure headers exist\n  config.headers = config.headers || {};\n\n  // Transform request data\n  config.data = transformData(\n    config.data,\n    config.headers,\n    config.transformRequest\n  );\n\n  // Flatten headers\n  config.headers = utils.merge(\n    config.headers.common || {},\n    config.headers[config.method] || {},\n    config.headers || {}\n  );\n\n  utils.forEach(\n    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],\n    function cleanHeaderConfig(method) {\n      delete config.headers[method];\n    }\n  );\n\n  var adapter = config.adapter || defaults.adapter;\n\n  return adapter(config).then(function onAdapterResolution(response) {\n    throwIfCancellationRequested(config);\n\n    // Transform response data\n    response.data = transformData(\n      response.data,\n      response.headers,\n      config.transformResponse\n    );\n\n    return response;\n  }, function onAdapterRejection(reason) {\n    if (!isCancel(reason)) {\n      throwIfCancellationRequested(config);\n\n      // Transform response data\n      if (reason && reason.response) {\n        reason.response.data = transformData(\n          reason.response.data,\n          reason.response.headers,\n          config.transformResponse\n        );\n      }\n    }\n\n    return Promise.reject(reason);\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/dispatchRequest.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Update an Error with the specified config, error code, and response.\n *\n * @param {Error} error The error to update.\n * @param {Object} config The config.\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\n * @param {Object} [request] The request.\n * @param {Object} [response] The response.\n * @returns {Error} The error.\n */\nmodule.exports = function enhanceError(error, config, code, request, response) {\n  error.config = config;\n  if (code) {\n    error.code = code;\n  }\n  error.request = request;\n  error.response = response;\n  return error;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/enhanceError.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar createError = __webpack_require__(/*! ./createError */ \"./node_modules/axios/lib/core/createError.js\");\n\n/**\n * Resolve or reject a Promise based on response status.\n *\n * @param {Function} resolve A function that resolves the promise.\n * @param {Function} reject A function that rejects the promise.\n * @param {object} response The response.\n */\nmodule.exports = function settle(resolve, reject, response) {\n  var validateStatus = response.config.validateStatus;\n  // Note: status is not exposed by XDomainRequest\n  if (!response.status || !validateStatus || validateStatus(response.status)) {\n    resolve(response);\n  } else {\n    reject(createError(\n      'Request failed with status code ' + response.status,\n      response.config,\n      null,\n      response.request,\n      response\n    ));\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/settle.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\n/**\n * Transform the data for a request or a response\n *\n * @param {Object|String} data The data to be transformed\n * @param {Array} headers The headers for the request or response\n * @param {Array|Function} fns A single function or Array of functions\n * @returns {*} The resulting transformed data\n */\nmodule.exports = function transformData(data, headers, fns) {\n  /*eslint no-param-reassign:0*/\n  utils.forEach(fns, function transform(fn) {\n    data = fn(data, headers);\n  });\n\n  return data;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/transformData.js?");

/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/axios/lib/utils.js\");\nvar normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ \"./node_modules/axios/lib/helpers/normalizeHeaderName.js\");\n\nvar DEFAULT_CONTENT_TYPE = {\n  'Content-Type': 'application/x-www-form-urlencoded'\n};\n\nfunction setContentTypeIfUnset(headers, value) {\n  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {\n    headers['Content-Type'] = value;\n  }\n}\n\nfunction getDefaultAdapter() {\n  var adapter;\n  if (typeof XMLHttpRequest !== 'undefined') {\n    // For browsers use XHR adapter\n    adapter = __webpack_require__(/*! ./adapters/xhr */ \"./node_modules/axios/lib/adapters/xhr.js\");\n  } else if (typeof process !== 'undefined') {\n    // For node use HTTP adapter\n    adapter = __webpack_require__(/*! ./adapters/http */ \"./node_modules/axios/lib/adapters/xhr.js\");\n  }\n  return adapter;\n}\n\nvar defaults = {\n  adapter: getDefaultAdapter(),\n\n  transformRequest: [function transformRequest(data, headers) {\n    normalizeHeaderName(headers, 'Content-Type');\n    if (utils.isFormData(data) ||\n      utils.isArrayBuffer(data) ||\n      utils.isBuffer(data) ||\n      utils.isStream(data) ||\n      utils.isFile(data) ||\n      utils.isBlob(data)\n    ) {\n      return data;\n    }\n    if (utils.isArrayBufferView(data)) {\n      return data.buffer;\n    }\n    if (utils.isURLSearchParams(data)) {\n      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');\n      return data.toString();\n    }\n    if (utils.isObject(data)) {\n      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');\n      return JSON.stringify(data);\n    }\n    return data;\n  }],\n\n  transformResponse: [function transformResponse(data) {\n    /*eslint no-param-reassign:0*/\n    if (typeof data === 'string') {\n      try {\n        data = JSON.parse(data);\n      } catch (e) { /* Ignore */ }\n    }\n    return data;\n  }],\n\n  /**\n   * A timeout in milliseconds to abort a request. If set to 0 (default) a\n   * timeout is not created.\n   */\n  timeout: 0,\n\n  xsrfCookieName: 'XSRF-TOKEN',\n  xsrfHeaderName: 'X-XSRF-TOKEN',\n\n  maxContentLength: -1,\n\n  validateStatus: function validateStatus(status) {\n    return status >= 200 && status < 300;\n  }\n};\n\ndefaults.headers = {\n  common: {\n    'Accept': 'application/json, text/plain, */*'\n  }\n};\n\nutils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {\n  defaults.headers[method] = {};\n});\n\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\n  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);\n});\n\nmodule.exports = defaults;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/axios/lib/defaults.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function bind(fn, thisArg) {\n  return function wrap() {\n    var args = new Array(arguments.length);\n    for (var i = 0; i < args.length; i++) {\n      args[i] = arguments[i];\n    }\n    return fn.apply(thisArg, args);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/bind.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/btoa.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/btoa.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js\n\nvar chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';\n\nfunction E() {\n  this.message = 'String contains an invalid character';\n}\nE.prototype = new Error;\nE.prototype.code = 5;\nE.prototype.name = 'InvalidCharacterError';\n\nfunction btoa(input) {\n  var str = String(input);\n  var output = '';\n  for (\n    // initialize result and counter\n    var block, charCode, idx = 0, map = chars;\n    // if the next str index does not exist:\n    //   change the mapping table to \"=\"\n    //   check if d has no fractional digits\n    str.charAt(idx | 0) || (map = '=', idx % 1);\n    // \"8 - idx % 1 * 8\" generates the sequence 2, 4, 6, 8\n    output += map.charAt(63 & block >> 8 - idx % 1 * 8)\n  ) {\n    charCode = str.charCodeAt(idx += 3 / 4);\n    if (charCode > 0xFF) {\n      throw new E();\n    }\n    block = block << 8 | charCode;\n  }\n  return output;\n}\n\nmodule.exports = btoa;\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/btoa.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nfunction encode(val) {\n  return encodeURIComponent(val).\n    replace(/%40/gi, '@').\n    replace(/%3A/gi, ':').\n    replace(/%24/g, '$').\n    replace(/%2C/gi, ',').\n    replace(/%20/g, '+').\n    replace(/%5B/gi, '[').\n    replace(/%5D/gi, ']');\n}\n\n/**\n * Build a URL by appending params to the end\n *\n * @param {string} url The base of the url (e.g., http://www.google.com)\n * @param {object} [params] The params to be appended\n * @returns {string} The formatted url\n */\nmodule.exports = function buildURL(url, params, paramsSerializer) {\n  /*eslint no-param-reassign:0*/\n  if (!params) {\n    return url;\n  }\n\n  var serializedParams;\n  if (paramsSerializer) {\n    serializedParams = paramsSerializer(params);\n  } else if (utils.isURLSearchParams(params)) {\n    serializedParams = params.toString();\n  } else {\n    var parts = [];\n\n    utils.forEach(params, function serialize(val, key) {\n      if (val === null || typeof val === 'undefined') {\n        return;\n      }\n\n      if (utils.isArray(val)) {\n        key = key + '[]';\n      } else {\n        val = [val];\n      }\n\n      utils.forEach(val, function parseValue(v) {\n        if (utils.isDate(v)) {\n          v = v.toISOString();\n        } else if (utils.isObject(v)) {\n          v = JSON.stringify(v);\n        }\n        parts.push(encode(key) + '=' + encode(v));\n      });\n    });\n\n    serializedParams = parts.join('&');\n  }\n\n  if (serializedParams) {\n    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;\n  }\n\n  return url;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/buildURL.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Creates a new URL by combining the specified URLs\n *\n * @param {string} baseURL The base URL\n * @param {string} relativeURL The relative URL\n * @returns {string} The combined URL\n */\nmodule.exports = function combineURLs(baseURL, relativeURL) {\n  return relativeURL\n    ? baseURL.replace(/\\/+$/, '') + '/' + relativeURL.replace(/^\\/+/, '')\n    : baseURL;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/combineURLs.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs support document.cookie\n  (function standardBrowserEnv() {\n    return {\n      write: function write(name, value, expires, path, domain, secure) {\n        var cookie = [];\n        cookie.push(name + '=' + encodeURIComponent(value));\n\n        if (utils.isNumber(expires)) {\n          cookie.push('expires=' + new Date(expires).toGMTString());\n        }\n\n        if (utils.isString(path)) {\n          cookie.push('path=' + path);\n        }\n\n        if (utils.isString(domain)) {\n          cookie.push('domain=' + domain);\n        }\n\n        if (secure === true) {\n          cookie.push('secure');\n        }\n\n        document.cookie = cookie.join('; ');\n      },\n\n      read: function read(name) {\n        var match = document.cookie.match(new RegExp('(^|;\\\\s*)(' + name + ')=([^;]*)'));\n        return (match ? decodeURIComponent(match[3]) : null);\n      },\n\n      remove: function remove(name) {\n        this.write(name, '', Date.now() - 86400000);\n      }\n    };\n  })() :\n\n  // Non standard browser env (web workers, react-native) lack needed support.\n  (function nonStandardBrowserEnv() {\n    return {\n      write: function write() {},\n      read: function read() { return null; },\n      remove: function remove() {}\n    };\n  })()\n);\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/cookies.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Determines whether the specified URL is absolute\n *\n * @param {string} url The URL to test\n * @returns {boolean} True if the specified URL is absolute, otherwise false\n */\nmodule.exports = function isAbsoluteURL(url) {\n  // A URL is considered absolute if it begins with \"<scheme>://\" or \"//\" (protocol-relative URL).\n  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed\n  // by any combination of letters, digits, plus, period, or hyphen.\n  return /^([a-z][a-z\\d\\+\\-\\.]*:)?\\/\\//i.test(url);\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/isAbsoluteURL.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = (\n  utils.isStandardBrowserEnv() ?\n\n  // Standard browser envs have full support of the APIs needed to test\n  // whether the request URL is of the same origin as current location.\n  (function standardBrowserEnv() {\n    var msie = /(msie|trident)/i.test(navigator.userAgent);\n    var urlParsingNode = document.createElement('a');\n    var originURL;\n\n    /**\n    * Parse a URL to discover it's components\n    *\n    * @param {String} url The URL to be parsed\n    * @returns {Object}\n    */\n    function resolveURL(url) {\n      var href = url;\n\n      if (msie) {\n        // IE needs attribute set twice to normalize properties\n        urlParsingNode.setAttribute('href', href);\n        href = urlParsingNode.href;\n      }\n\n      urlParsingNode.setAttribute('href', href);\n\n      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils\n      return {\n        href: urlParsingNode.href,\n        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',\n        host: urlParsingNode.host,\n        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\\?/, '') : '',\n        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',\n        hostname: urlParsingNode.hostname,\n        port: urlParsingNode.port,\n        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?\n                  urlParsingNode.pathname :\n                  '/' + urlParsingNode.pathname\n      };\n    }\n\n    originURL = resolveURL(window.location.href);\n\n    /**\n    * Determine if a URL shares the same origin as the current location\n    *\n    * @param {String} requestURL The URL to test\n    * @returns {boolean} True if URL shares the same origin, otherwise false\n    */\n    return function isURLSameOrigin(requestURL) {\n      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;\n      return (parsed.protocol === originURL.protocol &&\n            parsed.host === originURL.host);\n    };\n  })() :\n\n  // Non standard browser envs (web workers, react-native) lack needed support.\n  (function nonStandardBrowserEnv() {\n    return function isURLSameOrigin() {\n      return true;\n    };\n  })()\n);\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/isURLSameOrigin.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/axios/lib/utils.js\");\n\nmodule.exports = function normalizeHeaderName(headers, normalizedName) {\n  utils.forEach(headers, function processHeader(value, name) {\n    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {\n      headers[normalizedName] = value;\n      delete headers[name];\n    }\n  });\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/normalizeHeaderName.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\n\n// Headers whose duplicates are ignored by node\n// c.f. https://nodejs.org/api/http.html#http_message_headers\nvar ignoreDuplicateOf = [\n  'age', 'authorization', 'content-length', 'content-type', 'etag',\n  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',\n  'last-modified', 'location', 'max-forwards', 'proxy-authorization',\n  'referer', 'retry-after', 'user-agent'\n];\n\n/**\n * Parse headers into an object\n *\n * ```\n * Date: Wed, 27 Aug 2014 08:58:49 GMT\n * Content-Type: application/json\n * Connection: keep-alive\n * Transfer-Encoding: chunked\n * ```\n *\n * @param {String} headers Headers needing to be parsed\n * @returns {Object} Headers parsed into an object\n */\nmodule.exports = function parseHeaders(headers) {\n  var parsed = {};\n  var key;\n  var val;\n  var i;\n\n  if (!headers) { return parsed; }\n\n  utils.forEach(headers.split('\\n'), function parser(line) {\n    i = line.indexOf(':');\n    key = utils.trim(line.substr(0, i)).toLowerCase();\n    val = utils.trim(line.substr(i + 1));\n\n    if (key) {\n      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {\n        return;\n      }\n      if (key === 'set-cookie') {\n        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);\n      } else {\n        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;\n      }\n    }\n  });\n\n  return parsed;\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/parseHeaders.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\n * Syntactic sugar for invoking a function and expanding an array for arguments.\n *\n * Common use case would be to use `Function.prototype.apply`.\n *\n *  ```js\n *  function f(x, y, z) {}\n *  var args = [1, 2, 3];\n *  f.apply(null, args);\n *  ```\n *\n * With `spread` this example can be re-written.\n *\n *  ```js\n *  spread(function(x, y, z) {})([1, 2, 3]);\n *  ```\n *\n * @param {Function} callback\n * @returns {Function}\n */\nmodule.exports = function spread(callback) {\n  return function wrap(arr) {\n    return callback.apply(null, arr);\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/spread.js?");

/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/axios/lib/helpers/bind.js\");\nvar isBuffer = __webpack_require__(/*! is-buffer */ \"./node_modules/is-buffer/index.js\");\n\n/*global toString:true*/\n\n// utils is a library of generic helper functions non-specific to axios\n\nvar toString = Object.prototype.toString;\n\n/**\n * Determine if a value is an Array\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Array, otherwise false\n */\nfunction isArray(val) {\n  return toString.call(val) === '[object Array]';\n}\n\n/**\n * Determine if a value is an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an ArrayBuffer, otherwise false\n */\nfunction isArrayBuffer(val) {\n  return toString.call(val) === '[object ArrayBuffer]';\n}\n\n/**\n * Determine if a value is a FormData\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an FormData, otherwise false\n */\nfunction isFormData(val) {\n  return (typeof FormData !== 'undefined') && (val instanceof FormData);\n}\n\n/**\n * Determine if a value is a view on an ArrayBuffer\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false\n */\nfunction isArrayBufferView(val) {\n  var result;\n  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {\n    result = ArrayBuffer.isView(val);\n  } else {\n    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);\n  }\n  return result;\n}\n\n/**\n * Determine if a value is a String\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a String, otherwise false\n */\nfunction isString(val) {\n  return typeof val === 'string';\n}\n\n/**\n * Determine if a value is a Number\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Number, otherwise false\n */\nfunction isNumber(val) {\n  return typeof val === 'number';\n}\n\n/**\n * Determine if a value is undefined\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if the value is undefined, otherwise false\n */\nfunction isUndefined(val) {\n  return typeof val === 'undefined';\n}\n\n/**\n * Determine if a value is an Object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is an Object, otherwise false\n */\nfunction isObject(val) {\n  return val !== null && typeof val === 'object';\n}\n\n/**\n * Determine if a value is a Date\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Date, otherwise false\n */\nfunction isDate(val) {\n  return toString.call(val) === '[object Date]';\n}\n\n/**\n * Determine if a value is a File\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a File, otherwise false\n */\nfunction isFile(val) {\n  return toString.call(val) === '[object File]';\n}\n\n/**\n * Determine if a value is a Blob\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Blob, otherwise false\n */\nfunction isBlob(val) {\n  return toString.call(val) === '[object Blob]';\n}\n\n/**\n * Determine if a value is a Function\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Function, otherwise false\n */\nfunction isFunction(val) {\n  return toString.call(val) === '[object Function]';\n}\n\n/**\n * Determine if a value is a Stream\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a Stream, otherwise false\n */\nfunction isStream(val) {\n  return isObject(val) && isFunction(val.pipe);\n}\n\n/**\n * Determine if a value is a URLSearchParams object\n *\n * @param {Object} val The value to test\n * @returns {boolean} True if value is a URLSearchParams object, otherwise false\n */\nfunction isURLSearchParams(val) {\n  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;\n}\n\n/**\n * Trim excess whitespace off the beginning and end of a string\n *\n * @param {String} str The String to trim\n * @returns {String} The String freed of excess whitespace\n */\nfunction trim(str) {\n  return str.replace(/^\\s*/, '').replace(/\\s*$/, '');\n}\n\n/**\n * Determine if we're running in a standard browser environment\n *\n * This allows axios to run in a web worker, and react-native.\n * Both environments support XMLHttpRequest, but not fully standard globals.\n *\n * web workers:\n *  typeof window -> undefined\n *  typeof document -> undefined\n *\n * react-native:\n *  navigator.product -> 'ReactNative'\n */\nfunction isStandardBrowserEnv() {\n  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {\n    return false;\n  }\n  return (\n    typeof window !== 'undefined' &&\n    typeof document !== 'undefined'\n  );\n}\n\n/**\n * Iterate over an Array or an Object invoking a function for each item.\n *\n * If `obj` is an Array callback will be called passing\n * the value, index, and complete array for each item.\n *\n * If 'obj' is an Object callback will be called passing\n * the value, key, and complete object for each property.\n *\n * @param {Object|Array} obj The object to iterate\n * @param {Function} fn The callback to invoke for each item\n */\nfunction forEach(obj, fn) {\n  // Don't bother if no value provided\n  if (obj === null || typeof obj === 'undefined') {\n    return;\n  }\n\n  // Force an array if not already something iterable\n  if (typeof obj !== 'object') {\n    /*eslint no-param-reassign:0*/\n    obj = [obj];\n  }\n\n  if (isArray(obj)) {\n    // Iterate over array values\n    for (var i = 0, l = obj.length; i < l; i++) {\n      fn.call(null, obj[i], i, obj);\n    }\n  } else {\n    // Iterate over object keys\n    for (var key in obj) {\n      if (Object.prototype.hasOwnProperty.call(obj, key)) {\n        fn.call(null, obj[key], key, obj);\n      }\n    }\n  }\n}\n\n/**\n * Accepts varargs expecting each argument to be an object, then\n * immutably merges the properties of each object and returns result.\n *\n * When multiple objects contain the same key the later object in\n * the arguments list will take precedence.\n *\n * Example:\n *\n * ```js\n * var result = merge({foo: 123}, {foo: 456});\n * console.log(result.foo); // outputs 456\n * ```\n *\n * @param {Object} obj1 Object to merge\n * @returns {Object} Result of all merge properties\n */\nfunction merge(/* obj1, obj2, obj3, ... */) {\n  var result = {};\n  function assignValue(val, key) {\n    if (typeof result[key] === 'object' && typeof val === 'object') {\n      result[key] = merge(result[key], val);\n    } else {\n      result[key] = val;\n    }\n  }\n\n  for (var i = 0, l = arguments.length; i < l; i++) {\n    forEach(arguments[i], assignValue);\n  }\n  return result;\n}\n\n/**\n * Extends object a by mutably adding to it the properties of object b.\n *\n * @param {Object} a The object to be extended\n * @param {Object} b The object to copy properties from\n * @param {Object} thisArg The object to bind function to\n * @return {Object} The resulting value of object a\n */\nfunction extend(a, b, thisArg) {\n  forEach(b, function assignValue(val, key) {\n    if (thisArg && typeof val === 'function') {\n      a[key] = bind(val, thisArg);\n    } else {\n      a[key] = val;\n    }\n  });\n  return a;\n}\n\nmodule.exports = {\n  isArray: isArray,\n  isArrayBuffer: isArrayBuffer,\n  isBuffer: isBuffer,\n  isFormData: isFormData,\n  isArrayBufferView: isArrayBufferView,\n  isString: isString,\n  isNumber: isNumber,\n  isObject: isObject,\n  isUndefined: isUndefined,\n  isDate: isDate,\n  isFile: isFile,\n  isBlob: isBlob,\n  isFunction: isFunction,\n  isStream: isStream,\n  isURLSearchParams: isURLSearchParams,\n  isStandardBrowserEnv: isStandardBrowserEnv,\n  forEach: forEach,\n  merge: merge,\n  extend: extend,\n  trim: trim\n};\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/utils.js?");

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\n * Determine if an object is a Buffer\n *\n * @author   Feross Aboukhadijeh <https://feross.org>\n * @license  MIT\n */\n\n// The _isBuffer check is for Safari 5-7 support, because it's missing\n// Object.prototype.constructor. Remove this eventually\nmodule.exports = function (obj) {\n  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)\n}\n\nfunction isBuffer (obj) {\n  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)\n}\n\n// For Node v0.10 support. Remove this eventually.\nfunction isSlowBuffer (obj) {\n  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))\n}\n\n\n//# sourceURL=webpack:///./node_modules/is-buffer/index.js?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./js/main.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./js/main.js */\"./js/main.js\");\n\n\n//# sourceURL=webpack:///multi_./js/main.js?");

/***/ })

/******/ });