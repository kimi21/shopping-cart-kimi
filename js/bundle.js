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

/***/ "./js/Utility/utilities.js":
/*!*********************************!*\
  !*** ./js/Utility/utilities.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Utilities; });\n/* harmony import */ var _view_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view/base */ \"./js/view/base.js\");\n\n\nclass Utilities {\n\n    constructor() {}\n    \n    toggleDisplay(el) {\n        el.classList.toggle('hide');\n        el.classList.toggle('show');\n\n        //return a flag if class 'show' was added to el's classList\n        if(el.classList.contains('show')) {\n            return true;\n        } else {\n            return false;\n        }\n\n    }\n\n\n    showAsErrorText(el) {\n        //add err-input class and remove ok-input\n        if(!(el.classList.contains('err-input')))\n            el.classList.add('err-input');\n\n        //remove ok-input if it exists\n        if(el.classList.contains('ok-input')) {\n           el.classList.remove('ok-input');\n        }\n    }\n\n\n    showAsOkText(el) {\n        //add ok-input class and remove error-input\n        if(!(el.classList.contains('ok-input')))\n            el.classList.add('ok-input');\n\n        //remove err-input if it exists\n        if(el.classList.contains('err-input')) {\n           el.classList.remove('err-input');\n        }\n    }\n\n\n    show(el) {\n\n        //check if show doesn't already exist\n        if(!(el.classList.contains('show')))\n            el.classList.add('show');\n\n        //remove hide if it exists\n        if(el.classList.contains('hide')) {\n           el.classList.remove('hide');\n        }\n    }\n\n    \n    hide(el) {\n\n        //check if hide doesn't already exist\n        if(!(el.classList.contains('hide')))\n            el.classList.add('hide');\n\n        //remove show if it exists\n        if(el.classList.contains('show')) {\n           el.classList.remove('show');\n        }\n    }\n\n\n\n    active(el) {\n\n        //check if active doesn't already exist\n        if(!(el.classList.contains('active')))\n            el.classList.add('active');\n\n        //remove deactive if it exists\n        if(el.classList.contains('deactive')) {\n           el.classList.remove('deactive');\n        }\n    }\n\n\n    deactive(el) {\n\n        //check if active doesn't already exist\n        if(!(el.classList.contains('deactive')))\n            el.classList.add('deactive');\n\n        //remove deactive if it exists\n        if(el.classList.contains('active')) {\n           el.classList.remove('active');\n        }\n    }\n\n\n    getCartLength() {\n        //Calculate total number of elements in cart\n   \n        let cartLength, cartData;\n        cartLength = 0;\n        cartData = JSON.parse(localStorage.getItem('cartData'));\n        \n        if(cartData !== null) {\n            for(var i = 0; i < cartData.length; i++) {\n                cartLength += +(cartData[i].productCurrentCount);\n            }\n        }\n\n        return cartLength;\n    }\n\n\n    updateHeaderNav(cartLength) {\n        _view_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].headerCartCountDiv.innerHTML = cartLength + ' items';\n    }\n    \n}\n\n\n\n//# sourceURL=webpack:///./js/Utility/utilities.js?");

/***/ }),

/***/ "./js/controller/carouselController.js":
/*!*********************************************!*\
  !*** ./js/controller/carouselController.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CarouselController; });\n/* harmony import */ var _Utility_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility/utilities */ \"./js/Utility/utilities.js\");\n/* harmony import */ var _view_carouselView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/carouselView */ \"./js/view/carouselView.js\");\n/* harmony import */ var _model_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/carousel */ \"./js/model/carousel.js\");\n/* harmony import */ var _view_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/base */ \"./js/view/base.js\");\n\n\n\n\n\n\nclass CarouselController {\n    constructor() {\n        this.view = new _view_carouselView__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        this.model = new _model_carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n        this.utility = new _Utility_utilities__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        \n    }\n\n    async loadCarousel() {\n        //1) create new Home(model) object and add to state\n        // this.state.Carousel = this.model; \n    \n        //2) get the carousel images \n        const carousel = await this.model.getCarousel();\n        console.log(\"Fetching carousel... LEngth = \"+ carousel.length);\n    \n        //3) render results on UI\n        this.view.renderCarousel(carousel);\n        this.view.changeSlide();\n\n    }\n\n\n    carouselEvenListener() {\n        _view_base__WEBPACK_IMPORTED_MODULE_3__[\"elements\"].carouselContainer.addEventListener('click', (event) => {\n            if(event.target.matches('.js-dots')) {\n                this.view.changeSlide(event);\n            }\n            \n        });   \n    }\n\n} \n\n//# sourceURL=webpack:///./js/controller/carouselController.js?");

/***/ }),

/***/ "./js/controller/cartController.js":
/*!*****************************************!*\
  !*** ./js/controller/cartController.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CartController; });\n/* harmony import */ var _model_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/products */ \"./js/model/products.js\");\n/* harmony import */ var _view_cartView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/cartView */ \"./js/view/cartView.js\");\n/* harmony import */ var _Utility_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utility/utilities */ \"./js/Utility/utilities.js\");\n/* harmony import */ var _view_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/base */ \"./js/view/base.js\");\n\n\n\n\n\n\nclass CartController {\n    constructor(state) {\n        this.view = new _view_cartView__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        this.model = new _model_products__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.state = state;\n        this.utility = new _Utility_utilities__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    }\n\n    initialize() {}\n\n    displayModal() {\n        document.querySelector('.body').classList.add('modal-open');\n        document.querySelector('.modal').classList.add('modal-bg-style');\n    }\n\n\n    removeModal() {\n        document.querySelector('.body').classList.remove('modal-open');\n        document.querySelector('.modal').classList.remove('modal-bg-style');\n    }\n\n\n    toggleCartDisplay() {\n        let isDisplayed = this.utility.toggleDisplay(_view_base__WEBPACK_IMPORTED_MODULE_3__[\"elements\"].cartModal);\n            //if cart is shown, and cart data is not null\n            if(isDisplayed) {\n                this.displayModal();\n\n                if(localStorage.getItem('cartData') !== null)\n                    this.view.renderResult(JSON.parse(localStorage.getItem('cartData')));\n                \n                this.view.updateCartBillUI();\n            } else {\n                this.removeModal();\n            }\n    }\n\n\n    toggleCartDisplayFromHeader() {\n        //listen for click on cart icon in header\n        _view_base__WEBPACK_IMPORTED_MODULE_3__[\"elements\"].cartIconInHeader.addEventListener('click', (event) => {\n            this.toggleCartDisplay();\n        });\n    }\n\n\n    toggleCartDisplayFromHamburgerMenu() {\n        //listen for click on cart icon in hamburger Menu\n        _view_base__WEBPACK_IMPORTED_MODULE_3__[\"elements\"].cartIconInHamburgerMenu.addEventListener('click', (event) => {\n            \n            let isDisplayed = this.utility.toggleDisplay(_view_base__WEBPACK_IMPORTED_MODULE_3__[\"elements\"].cartModal);\n            if(isDisplayed) {   //if cart is shown, load cart data\n                this.view.renderResult(JSON.parse(localStorage.getItem('cartData')));\n            }\n            \n        });\n    }\n\n\n    //handles click event of add btn on product in cart\n    handlePlusClick() {  \n        let product;\n        let success;\n\n        // 1. get the corresponding product of this add btn\n        product = this.view.getProductClicked(event); \n        success = this.model.increaseProductCount(product);\n        \n        if(success) {\n            //if the element's count was increased\n            this.view.updateProductInCartUI(event, product); \n            this.utility.updateHeaderNav(this.utility.getCartLength());           \n            this.view.updateCartBillUI();\n        }\n            \n    }\n\n\n    handleMinusClick() {\n        let product;\n        let countReduced;\n\n        // 1. get the corresponding product of this minus btn\n        product = this.view.getProductClicked(event); \n\n        //2. decrease product's count in localstorage(LS)/ remove product \n        // from LS if count reduced to 0\n        countReduced = this.model.decreaseProductCount(product);\n\n        if(countReduced) \n            this.view.updateProductInCartUI(event, product);\n\n        else {   //element's removed from cart since count reduced to 0\n            this.view.renderResult(JSON.parse(localStorage.getItem('cartData')));\n            this.view.updateCartBillInfoUI(JSON.parse(localStorage.getItem('cartData')));\n        } \n        \n        this.utility.updateHeaderNav(this.utility.getCartLength());\n        this.view.updateCartBillUI();\n    }\n\n\n    //handles click events in cart\n    cartEventHandler() {\n        _view_base__WEBPACK_IMPORTED_MODULE_3__[\"elements\"].cartModal.addEventListener('click', (event) => {\n            event.preventDefault();\n\n            if(event.target.matches('.js-btn-minus')) {\n                this.handleMinusClick(event);\n            }\n            if(event.target.matches('.js-btn-add')) { \n                this.handlePlusClick(event);\n            }\n            if(event.target.matches('.btn-close')) {\n                this.toggleCartDisplay();\n            }\n\n        });   \n    }\n\n} \n\n//# sourceURL=webpack:///./js/controller/cartController.js?");

/***/ }),

/***/ "./js/controller/formController.js":
/*!*****************************************!*\
  !*** ./js/controller/formController.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FormController; });\n/* harmony import */ var _model_formValidator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/formValidator */ \"./js/model/formValidator.js\");\n/* harmony import */ var _view_formView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/formView */ \"./js/view/formView.js\");\n/* harmony import */ var _Utility_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utility/utilities */ \"./js/Utility/utilities.js\");\n/* harmony import */ var _view_errorNotifs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/errorNotifs */ \"./js/view/errorNotifs.js\");\n/* harmony import */ var _view_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/base */ \"./js/view/base.js\");\n\n\n\n\n\n\nclass FormController {\n    constructor(form) {\n        this.form = form;\n        this.formId = this.form.id;\n        this.model = new _model_formValidator__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.view = new _view_formView__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.form);\n        this.utility = new _Utility_utilities__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n        this.validEmail = false;\n        this.validPassword = false;\n        this.passwordConfirmed = false;\n    }\n\n    initialize() {\n        this.utility.updateHeaderNav(this.utility.getCartLength());\n        //disable submit button on form load\n        // elements.submitBtn.disabled = true;\n    }\n\n\n    onSubmit() {\n\n        if(this.form.name == 'index') {\n            if(this.validEmail && this.validPassword ) {\n                window.location.assign(\"home.html\");\n\n            } else {\n                if(!this.validEmail) {\n                    this.view.displayMessage(this.form['email'], _view_errorNotifs__WEBPACK_IMPORTED_MODULE_3__[\"errorNotifications\"].emptyInput);\n                }\n                if(!this.validPassword) {\n                    this.view.displayMessage(this.form['pswrd'], _view_errorNotifs__WEBPACK_IMPORTED_MODULE_3__[\"errorNotifications\"].emptyInput);\n                }\n                // window.location.assign(this.form.name + '.html');\n                e.preventDefault();\n            }\n\n        } else if(this.form.name == 'register') {\n            if(this.validEmail && this.validPassword && this.passwordConfirmed) {\n                window.location.assign(\"home.html\");\n            } else {\n                if(!this.validEmail) {\n                    this.view.displayMessage(this.form['email'], _view_errorNotifs__WEBPACK_IMPORTED_MODULE_3__[\"errorNotifications\"].emptyInput);\n                }\n                if(!this.validPassword) {\n                    this.view.displayMessage(this.form['pswrd'], _view_errorNotifs__WEBPACK_IMPORTED_MODULE_3__[\"errorNotifications\"].emptyInput);\n                }\n                if(!this.passwordConfirmed) {\n                    this.view.displayMessage(this.form['pswrd'], \"Passwords do Not match\");\n                }\n                // window.location.assign(this.form.name + '.html');\n                e.preventDefault();\n            }\n        }\n        \n    }\n\n\n    confirmPassword() {\n        if(this.validPassword) {\n            //now check if the passwords match\n\n        }\n    }\n\n\n    loadPasswordMsg(passwordScore) {\n        let message = '';\n\n        if(passwordScore == 0) {    //password field was empty\n            message = _view_errorNotifs__WEBPACK_IMPORTED_MODULE_3__[\"errorNotifications\"].emptyInput;\n            this.view.displayMessage(this.form['pswrd'], message);\n            this.validPassword = false;\n\n        } else if(passwordScore > 70) {     //here, display password msg as green\n            message = _view_errorNotifs__WEBPACK_IMPORTED_MODULE_3__[\"errorNotifications\"].strongPassword;\n            this.view.displayOkMessage(this.form['pswrd'], message);\n            this.validPassword = true;\n\n        } else if(passwordScore > 50) {\n            message = _view_errorNotifs__WEBPACK_IMPORTED_MODULE_3__[\"errorNotifications\"].goodPassword;\n            this.view.displayMessage(this.form['pswrd'], message);\n            this.validPassword = true;\n\n        } else if(passwordScore >= 30) {\n            message = _view_errorNotifs__WEBPACK_IMPORTED_MODULE_3__[\"errorNotifications\"].weakPassword;\n            this.view.displayMessage(this.form['pswrd'], message);\n            this.validPassword = false;\n\n        } else if(passwordScore >= 5) {\n            message = _view_errorNotifs__WEBPACK_IMPORTED_MODULE_3__[\"errorNotifications\"].shortPassword;\n            this.view.displayMessage(this.form['pswrd'], message);\n            this.validPassword = false;\n        }\n\n        console.log(`Password Score : ${passwordScore} | Password Message : ${message}`);\n\n    }\n\n\n    getEmailMsg(isEmailValid) {\n        if(isEmailValid == 0) {     //Email was empty\n            this.view.displayMessage(this.form['email'], _view_errorNotifs__WEBPACK_IMPORTED_MODULE_3__[\"errorNotifications\"].emptyInput);\n            this.validEmail = false;\n\n        } else if(isEmailValid == 2) {      //Email not empty but INVALID\n            this.view.displayMessage(this.form['email'], _view_errorNotifs__WEBPACK_IMPORTED_MODULE_3__[\"errorNotifications\"].invalidEmail);\n            this.validEmail = false;\n\n        } else if( isEmailValid == 1) {     //Email is valid\n            this.view.hideError( this.form['email']);\n            this.validEmail = true;\n        }\n        this.form['email'].focus();\n    }\n\n\n    formEventListener() {\n\n         //listen for on 'blur' event of email input field\n         if(this.form['email']) {\n            this.form['email'].addEventListener('input', () => {\n            \n                let isEmailValid = this.view.validateEmail(this.form['email']);\n                this.getEmailMsg(isEmailValid);\n  \n            });\n        }\n\n        //listen for on 'input' events of password input field on form\n        if(this.form['pswrd']) {\n            this.form['pswrd'].addEventListener('input', () => {\n                let passwordScore = 0;\n\n                passwordScore = this.view.checkPasswordStrength(this.form['pswrd']);\n                this.loadPasswordMsg(passwordScore);\n            });\n\n        }\n\n        _view_base__WEBPACK_IMPORTED_MODULE_4__[\"elements\"].submitBtn.addEventListener('click', (event) => {\n            event.preventDefault();\n            this.onSubmit();\n        });\n\n        //listen for confirm password input \n        if(this.form['confirm-pswrd']) {\n            this.form['confirm-pswrd'].addEventListener('input', () => {\n                \n                //check if the original password is valid\n                if(this.validPassword) {\n                   \n                    let passwordsMatch = this.view.confirmPassword(this.form['pswrd'], this.form['confirm-pswrd']);\n                    if(passwordsMatch) {\n                        //show error for not matching passwords\n                        this.passwordConfirmed = true;\n                        this.view.hideError( this.form['confirm-pswrd']);\n\n                        // this.view.displayOkMessage(this.form['confirm-pswrd'], \"Your passwords match!\");\n                    } else {\n                        this.passwordConfirmed = false;\n                        this.view.displayMessage(this.form['confirm-pswrd'], _view_errorNotifs__WEBPACK_IMPORTED_MODULE_3__[\"errorNotifications\"].passwordMismatch);\n\n                    }\n                }                    \n                \n                \n            });\n\n        }\n    }\n\n}\n\n\n//# sourceURL=webpack:///./js/controller/formController.js?");

/***/ }),

/***/ "./js/controller/hamburgerController.js":
/*!**********************************************!*\
  !*** ./js/controller/hamburgerController.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HamburgerController; });\n/* harmony import */ var _model_hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/hamburger */ \"./js/model/hamburger.js\");\n/* harmony import */ var _view_hamburgerView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/hamburgerView */ \"./js/view/hamburgerView.js\");\n/* harmony import */ var _Utility_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utility/utilities */ \"./js/Utility/utilities.js\");\n/* harmony import */ var _view_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/base */ \"./js/view/base.js\");\n\n\n\n\n\n\nclass HamburgerController {\n    constructor(state) {\n        this.view = new _view_hamburgerView__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        this.model = new _model_hamburger__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.state = state;\n        this.utility = new _Utility_utilities__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    }\n    \n    //handles click event of hamburger menu icon in header\n    eventListener() {\n        if(_view_base__WEBPACK_IMPORTED_MODULE_3__[\"elements\"].hamburgerMenuIcon) {\n            _view_base__WEBPACK_IMPORTED_MODULE_3__[\"elements\"].hamburgerMenuIcon.addEventListener('click', ()=> {\n                if(_view_base__WEBPACK_IMPORTED_MODULE_3__[\"elements\"].hamburgerMenuDiv) {\n                   debugger;\n                        let isDisplayed = this.utility.toggleDisplay(_view_base__WEBPACK_IMPORTED_MODULE_3__[\"elements\"].hamburgerMenuDiv);\n                } else {\n                    console.log('not found hamburger menu div');\n                }\n            });\n        }\n        \n    }\n \n}\n\n//# sourceURL=webpack:///./js/controller/hamburgerController.js?");

/***/ }),

/***/ "./js/controller/homeController.js":
/*!*****************************************!*\
  !*** ./js/controller/homeController.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HomeController; });\n/* harmony import */ var _model_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/home */ \"./js/model/home.js\");\n/* harmony import */ var _view_homeView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/homeView */ \"./js/view/homeView.js\");\n/* harmony import */ var _Utility_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utility/utilities */ \"./js/Utility/utilities.js\");\n/* harmony import */ var _controller_carouselController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../controller/carouselController */ \"./js/controller/carouselController.js\");\n/* harmony import */ var _view_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/base */ \"./js/view/base.js\");\n\n\n\n\n\n\n\nclass HomeController {\n    constructor(state) {\n        this.view = new _view_homeView__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        this.model = new _model_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.utility = new _Utility_utilities__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n        this.state = state;\n        this.carouselController = new _controller_carouselController__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();        \n    }\n\n    initialize() {\n        this.utility.updateHeaderNav(this.utility.getCartLength());\n        this.carouselController.loadCarousel();\n        this.carouselController.carouselEvenListener();\n\n    }\n\n\n    async loadCategories() {\n    \n        //1) create new Home (model) object and add to state\n        this.state.Home = this.model; \n        console.log(this.state.Home);\n    \n        //2) get the categories and carousel images from\n        //   Home object in home.js\n        const categories = await this.model.getCategories();\n        const carousel = await this.model.getCarousel();\n        console.log(\"Fetching categories...\");\n    \n        //3) render results on UI\n        this.view.renderResults(categories);\n        console.log('loadCategories  was called from homeController');\n    }\n\n} \n\n//# sourceURL=webpack:///./js/controller/homeController.js?");

/***/ }),

/***/ "./js/controller/productsController.js":
/*!*********************************************!*\
  !*** ./js/controller/productsController.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductsController; });\n/* harmony import */ var _model_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/products */ \"./js/model/products.js\");\n/* harmony import */ var _view_productsView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/productsView */ \"./js/view/productsView.js\");\n/* harmony import */ var _view_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/base */ \"./js/view/base.js\");\n/* harmony import */ var _Utility_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utility/utilities */ \"./js/Utility/utilities.js\");\n\n\n\n\n\nclass ProductsController {\n\n    constructor(state) {\n        this.view = new _view_productsView__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        this.model = new _model_products__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.utility = new _Utility_utilities__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n        this.state = state;\n    }\n\n\n    initialize() {}\n\n\n    async loadProducts() {\n\n        //1) create new Products (model) object and add to state\n        this.state.Products = this.model; \n        console.log(this.state.Products);\n    \n        //2) get the products\n        const products = await this.model.getProducts();\n        console.log(\"Fetching products!!!!!!...\");\n    \n        //3) render results on UI\n        this.view.renderProducts(products);\n        \n        //Also update # of products in cart in the header\n        this.utility.updateHeaderNav(this.utility.getCartLength());\n\n        debugger;\n        // this.buyProduct();\n    }\n\n\n    wobleCart() {\n        _view_base__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].cartIconInHeader.style.webkitAnimationPlayState = \"running\";\n        _view_base__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].cartIconInHeader.style.animationPlayState = \"running\";\n    }\n\n    pauseWobleCart() {\n        _view_base__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].cartIconInHeader.style.webkitAnimationPlayState = \"paused\";\n        _view_base__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].cartIconInHeader.style.animationPlayState = \"paused\";\n    }\n\n\n    buyProduct() {\n        \n        if(_view_base__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].plpPageContent) {\n            // Listen for click event on Plp page's buy button\n            _view_base__WEBPACK_IMPORTED_MODULE_2__[\"elements\"].plpPageContent.addEventListener('click', (event) => {\n            \n                let productData;\n                \n                //2. Get the product which was clicked from the view\n                if(event.target.matches('.js-btn-buy')) {\n                    productData = this.view.getProductClicked(event); \n                    console.log(\"productData which was clicked : \" + productData); \n                }\n    \n                //3. send this product to model to add this product to cart\n                let isProductAdded = this.model.addToCart(productData);\n                console.log(\"Is product added to cart ? \" + isProductAdded);\n    \n                //4. if the product is added to cart, update cart count in header AND \n                //woble(animation) the cart icon in header\n                if(isProductAdded) {\n                    this.utility.updateHeaderNav(this.utility.getCartLength());\n                    setTimeout(this.wobleCart(), 1);\n                    setTimeout(this.pauseWobleCart(),4);\n                    // setTimeout(clearInterval(timeout),100);\n                    // pauseWobleCart\n                }\n            });\n        }\n    }\n\n\n} \n\n//# sourceURL=webpack:///./js/controller/productsController.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/base */ \"./js/view/base.js\");\n/* harmony import */ var _controller_homeController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller/homeController */ \"./js/controller/homeController.js\");\n/* harmony import */ var _controller_productsController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller/productsController */ \"./js/controller/productsController.js\");\n/* harmony import */ var _controller_cartController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller/cartController */ \"./js/controller/cartController.js\");\n/* harmony import */ var _controller_hamburgerController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controller/hamburgerController */ \"./js/controller/hamburgerController.js\");\n/* harmony import */ var _controller_formController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controller/formController */ \"./js/controller/formController.js\");\n// import Products from './model/products';\n\n\n// import * as cartView from './view/cartView';\n\n\n\n\n\n\n\n/** Global state of the app\n * - Product Object\n * - Category Object\n */\n\nconst state = {};\nvar cartData;\n\n(function() {\n    var hamburgerController = new _controller_hamburgerController__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n    hamburgerController.eventListener();\n    \n    if (window.location.href.indexOf('home.html') > 0) {\n        /**\n         * Home(Categories) controller\n         */\n        console.log(\"The URL contains home\");\n        var homeController = new _controller_homeController__WEBPACK_IMPORTED_MODULE_1__[\"default\"](state);\n        homeController.initialize();\n        homeController.loadCategories();\n\n    } else if(window.location.href.indexOf('plp.html') > 0) {\n        /**\n         * PLP Controller\n         */\n        console.log(\"The URL contains plp\");\n        var productsController = new _controller_productsController__WEBPACK_IMPORTED_MODULE_2__[\"default\"](state);\n        productsController.loadProducts();\n        productsController.buyProduct();\n\n    } else if(window.location.href.indexOf('index.html') > 0) {\n        \n        var formController = new _controller_formController__WEBPACK_IMPORTED_MODULE_5__[\"default\"](document.forms[0]);\n        formController.initialize();\n        formController.formEventListener();\n\n    } else if(window.location.href.indexOf('register.html') > 0) {\n        var formController = new _controller_formController__WEBPACK_IMPORTED_MODULE_5__[\"default\"](document.forms[0]);\n        formController.initialize();\n        formController.formEventListener();\n    } \n})();\n\n\n/**\n * CART Controller\n */\nvar cartController = new _controller_cartController__WEBPACK_IMPORTED_MODULE_3__[\"default\"](state);\n\n\ncartController.toggleCartDisplayFromHeader();\ncartController.toggleCartDisplayFromHamburgerMenu();\ncartController.cartEventHandler();\n\n\n\n\n\n\n\n\n/**\n * Hamburger Controller\n */\n// var hamburgerController = new HamburgerController(state);\n\n// debugger;\n// hamburgerController.handleClick();\n\n\n\n\n\n\n\n\n\n// const showCart = () => {\n//     cartData = JSON.parse(localStorage.getItem('cartData'));\n//     //Render products on Cart\n//     console.log(\"Rendering cart view\");\n//     cartView.renderResult(cartData);\n// }\n\n\n\n\n// elements.cartIconInHeader.addEventListener('click', function(event) {\n//     //cartElement is now cartModal\n    \n//     elements.cartModal.classList.remove('hide');\n//     elements.cartModal.classList.add('show');\n//     showCart();\n//     //toggle hide and show of cart\n\n//     // if(cartElement.style.display == 'none') {\n//     //     cartElement.style.display = 'block';\n//     //     elements.cartDynamic.innerHTML = '';\n//     //     showCart();\n//     // } else {\n//     //     cartElement.style.display = 'none';\n//     // }\n        \n\n//     //update cart count in the header\n//     // cartData = JSON.parse(localStorage.getItem('cartData'));\n//     // elements.headerCartCountDiv.textContent = cartData.length + (cartData.length === 1 ? ' item' : ' items');\n    \n// });\n\n\n// elements.closeBtn.addEventListener('click', function(event){\n//     //close cart \n//     document.querySelector('.cart-container').style.display = 'none';\n\n// });\n\n\n\n/**\n * Hamburger Menu Controller\n */\n\n// const toggleDisplay = (el) => {\n\n//     el.classList.toggle('hide');\n//     // if(el.classList.contains('hide')) {\n        \n//     //     /*  1.1. remove class 'hide' if present */\n//     //     el.classList.remove('hide');\n\n//     //     /*  1.2. add class'show' */\n//     //    el.classList.add('show');\n\n//     // } else if (el.classList.contains('show')) {\n        \n//     //     /*  1.1. remove class 'hide' if present */\n//     //     el.classList.remove('show');\n\n//     //     /*  1.2. add class'show' */\n//     //    el.classList.add('hide');\n\n//     // }\n\n// }\n\n// // elements.hamburgerMenuIcon.addEventListener('click', function(event){\n    \n// //     /* toggle display of hamburger menu div \n// //      *  1.check if hamburger menu div has class 'hide'\n// //      *      1.1. remove class 'hide' if present\n// //      *      1.2. add class'show'\n// //      */\n// //     toggleDisplay( elements.hamburgerMenuDiv);\n\n// // });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// // document.addEventListener('click', function (event) {\n// //             if (event.target.matches('.add-to-cart')) {\n// //                 const product = event.target.closest('.plp-container__products__item').dataset;\n// //                 let products = cartModelObj.add(product);\n//                 CartViewObj.setHtml(products);\n//             } \n// }\n    \n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/model/carousel.js":
/*!******************************!*\
  !*** ./js/model/carousel.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Carousel; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Carousel {\n    constructor() {\n        \n    }\n\n    async getCarousel() {\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(`./server/banners/index.get.json`);\n            return res.data;\n        } catch(err) {\n            alert(err);\n        }\n    }\n\n    \n}\n\n//# sourceURL=webpack:///./js/model/carousel.js?");

/***/ }),

/***/ "./js/model/formValidator.js":
/*!***********************************!*\
  !*** ./js/model/formValidator.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FormValidator; });\n\n\nclass FormValidator {\n    constructor(form) {\n        this.form = form;\n    }\n\n    //after form loads focus will go to email field\n    firstfocus() {\n       this.form['email'].focus();\n        return true;\n    }\n\n\n    //on blur event of email input\n    validateEmail() {\n        this.form['email'].addEventListener('blur', (event) => {\n            \n\n            if(this.form['email'].value == \"\") {\n                console.log();\n            }    \n        });\n        \n    }\n}\n    \n\n//# sourceURL=webpack:///./js/model/formValidator.js?");

/***/ }),

/***/ "./js/model/hamburger.js":
/*!*******************************!*\
  !*** ./js/model/hamburger.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Hamburger; });\n\nclass Hamburger {\n    constructor() {}\n}\n    \n\n//# sourceURL=webpack:///./js/model/hamburger.js?");

/***/ }),

/***/ "./js/model/home.js":
/*!**************************!*\
  !*** ./js/model/home.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Home {\n    constructor() {}\n\n    async getCategories() {\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(`./server/categories/index.get.json`);\n            // const result = res.data;\n            return res.data;\n        } catch (err) {\n            alert(err);\n        }\n    }  \n    \n    async getCarousel() {\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(`./server/banners/index.get.json`);\n            return res.data;\n        } catch(err) {\n            alert(err);\n        }\n\n    }\n}\n\n//# sourceURL=webpack:///./js/model/home.js?");

/***/ }),

/***/ "./js/model/products.js":
/*!******************************!*\
  !*** ./js/model/products.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Products; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n\nclass Products {\n    constructor() {}\n    \n    async getProducts(){\n        try {\n            const res = await axios__WEBPACK_IMPORTED_MODULE_0___default()(`../server/products/index.get.json`);\n            return res.data;\n        } catch (err) {\n            console.log(`Error fetching products : ${err}`);\n        }\n    }    \n\n    increaseProductCount(product) {\n\n        if(+(product.productCurrentCount) < +(product.productStock)) {\n            product.productCurrentCount++;\n            \n            //update this product in cart of local storage.\n            this.updateProductInCart(product);\n            return true;    //count increased successfully\n        } else {\n            return false;   //count exceeded stock\n        }\n    }\n\n\n    //Decreases product's count and updates product in local storage\n    decreaseProductCount(product) {\n\n        if(+(product.productCurrentCount) >= 1) {\n            product.productCurrentCount--;\n            \n            if(+(product.productCurrentCount) === 0) {\n                this.removeProductFromCart(product.productId);\n                return false; //since the element is now removed from the cart\n            }\n            //update this product in cart of local storage.\n            this.updateProductInCart(product);\n            return true;    //count decreased and item still in cart\n        }\n       \n    }\n\n\n    // create a productObj object from the data attributes in 'productData' variable\n    createProductObj (productData) {\n        const productObj = {\n            productId: productData.productId,\n            productName: productData.productName,\n            productImageurl: productData.productImageurl,\n            productDesc: productData.productDesc,\n            productPrice: productData.productPrice,\n            productCategory: productData.productCategory,\n            productSku: productData.productSku,\n            productStock: productData.productStock\n        };  \n    \n        return productObj;\n    }\n    \n\n    //2. check if the product is already in cart\n    productAlreadyInCart(productId) {\n    \n        let productFound;\n        let cartArr;\n    \n        //Get cart from local storage\n        cartArr = JSON.parse(localStorage.getItem('cartData')) || [];\n        console.log(\"cart : \" + cartArr);\n    \n        //check if cart is not empty\n        if(cartArr.length > 0) {\n\n            //return product found from cart\n            productFound = cartArr.find(function(cartProduct) {\n                return cartProduct.productId === productId ;\n            });\n        }\n        return productFound;   \n    }\n\n\n    /* update product's count in cart\n     */\n    updateProductInCart(product) {\n    \n        //1. fetch value of local storage's cartData. \n        var cart = JSON.parse(localStorage.getItem(\"cartData\"));\n        console.log(\"Cart BEFORE update: \" + cart);\n\n        //2. Find the product in cart\n        for(var i = 0; i < cart.length; i++) { \n            if(cart[i].productId === product.productId) {\n                //update count field\n                cart[i].productCurrentCount = product.productCurrentCount;\n            }\n        }\n\n        //store this updated cart in local storage\n        localStorage.setItem('cartData', JSON.stringify(cart));\n        console.log(\"Cart with updated count of product : \" + JSON.stringify(cart));\n    }\n\n\n    addNewProduct(productObj) {\n        //1. fetch value of localstorage's cartData. \n        var cart = JSON.parse(localStorage.getItem(\"cartData\")) || [];\n        console.log(\"Cart BEFORE push: \" + cart);\n\n        // 3. Add productObj to cart\n        cart.push(productObj);\n        console.log(\"Cart AFTER push: \" + cart);\n\n        // 4. store the updated cart in local storage\n        localStorage.setItem(\"cartData\", JSON.stringify(cart));\n        console.log(\"cart Added to LS\");\n    }\n\n\n    removeProductFromCart(productId) {\n        //1. fetch value of localstorage's cartData. \n        var cart = JSON.parse(localStorage.getItem(\"cartData\")) || [];\n\n        // 3. Remove product from cart\n        for(var i = 0; i < cart.length; i++) {\n            if(cart[i].productId === productId)\n                cart.splice(i, 1);\n        }\n        //cart.splice(cart.indexOf(cart.find((el) => el.productId === productId)));\n\n        // 4. store the updated cart in local storage\n        localStorage.setItem(\"cartData\", JSON.stringify(cart));\n        console.log(\"Product removed from cart\");\n    }\n\n    /* \n    *  Add product To Cart:\n    *  1.) create a productObj object from the data attributes in 'productData' variable\n    *  2.) Check if the product is already in cart\n        *  2.1.) If product is in cart => if in stock => increase count [do not add to cart] - flag #1\n        *  2.2.) If product is in cart => if not in stock => alert()\n    *  3.) If product not in cart => set its count to 1 => add it to cart\n    */\n    \n    addToCart(productData) {\n\n        //1. create a productObj object from the data attributes in 'productData' variable\n        let productObj = this.createProductObj(productData);\n\n        //2. check if the product is already in cart\n        let productInCart = this.productAlreadyInCart(productObj.productId);\n\n        \n        if(productInCart) {\n\n            //2.1.) product is IN cart and IN stock            \n            // productObj.productCurrentCount = ++productInCart.productCurrentCount;\n            let success = this.increaseProductCount(productInCart);\n            if(!success) {\n                console.log(\"Product is out of stock\");\n            }\n            return true;\n          \n        } else {\n            \n            //3.) product not in cart => set its count to 1 \n            productObj.productCurrentCount = 1;\n            \n            //add this new product to cart\n            this.addNewProduct(productObj);\n            return true;\n        }\n\n    }\n\n\n    //Calculate total number of elements in cart\n    getCartLength() {\n        let cartLength, cartData;\n        cartLength = 0;\n        cartData = JSON.parse(localStorage.getItem('cartData'));\n        \n        if(cartData !== null) {\n            cartData.forEach( (cartItem) => {\n                cartLength += cartItem.productCurrentCount;\n            });\n        }\n\n        return cartLength;\n    }\n\n}\n\n\n\n\n\n//# sourceURL=webpack:///./js/model/products.js?");

/***/ }),

/***/ "./js/view/base.js":
/*!*************************!*\
  !*** ./js/view/base.js ***!
  \*************************/
/*! exports provided: elements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elements\", function() { return elements; });\nconst elements = {\n    productsContainer: document.querySelector('.products-container'),\n    countInCart: document.querySelector('.text-light'),\n    homePageContent: document.querySelector('.js-home'),\n    carouselImages: document.querySelector('.main__carousel'),\n    carouselContainer: document.querySelector('.main__carousel-wrapper'),\n    categoryCards: document.querySelectorAll('.js-home .js-home-card'),\n    plpPageContent: document.querySelector('.js-plp-content'),\n    cartIconInHeader: document.querySelector('.nav--right__cart-link'),\n    countOnCart: document.querySelector('.cart-head-light'),\n    cartDynamic: document.querySelector('.cart-dynamic'),\n    headerCartCountDiv: document.querySelector('.js-cart-count'),\n    closeBtn: document.querySelector('.btn-close'),\n    cartBillAmount: document.querySelector('.cart-bottom-amount'),\n    hamburgerMenuIcon: document.querySelector('.nav--right__hamburger-menu'),\n    hamburgerMenuDiv: document.querySelector('.hamburger-menu-div'),\n    cartIconInHamburgerMenu : document.querySelector('.hamburger-menu-body__cart-link'),\n    cartModal: document.querySelector('.cart'),\n    btnBuy: document.querySelector('.js-btn-buy'),\n    totalBill: document.querySelector('.cart-bottom-amount'),\n    minusBtn: document.querySelector('.js-btn-minus'),\n    addBtn: document.querySelector('.js-btn-add'),\n    errorMsg: document.querySelector('.js-form__input-error'),\n    closeCartBtn: document.querySelector('.cart-modal__head__btn-close'),\n    submitBtn : document.querySelector('.form__submit-btn')\n};\n\n\n\n  \n\n\n//# sourceURL=webpack:///./js/view/base.js?");

/***/ }),

/***/ "./js/view/carouselView.js":
/*!*********************************!*\
  !*** ./js/view/carouselView.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CarouselView; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./js/view/base.js\");\n/* harmony import */ var _Utility_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utility/utilities */ \"./js/Utility/utilities.js\");\n\n\n\n\nclass CarouselView {\n    constructor() {\n        this.utility = new _Utility_utilities__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n        this.slideIndex = 0;\n    }\n\n\n    showSlide(currSlideNum) {\n        let slides = document.querySelectorAll('.js-carousel-img');\n        let dots = document.querySelectorAll('.js-dots');\n\n        if( currSlideNum > slides.length) { this.slideIndex =  1; }\n        if( currSlideNum < 1) { this.slideIndex = slides.length; }\n\n        slides.forEach((image) => {\n            this.utility.hide(image);\n        });\n\n        dots.forEach((dot) => {\n            this.utility.deactive(dot);\n        });\n\n        this.utility.show(slides[this.slideIndex - 1]);\n        this.utility.active(dots[this.slideIndex - 1]);\n    }\n\n\n\n    changeSlide(event) {\n        let movement = 1;\n        this.showSlide(this.slideIndex += movement);\n       \n    }\n    \n\n    renderCarouselImage(carouselImage) {\n        const markup = `\n            <li class=\"fade\"> \n                <img src=\"./.${carouselImage.bannerImageUrl}\" alt=\"${carouselImage.bannerImageAlt}\" \n                    id=\"${carouselImage.id}\" class=\"main__carousel__img js-carousel-img\" \"/>\n            </li>\n        `;\n        \n        if(_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].carouselImages)\n            _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].carouselImages.insertAdjacentHTML('beforeend', markup);\n    }\n\n\n    renderCarouselDots(carouselImage) {\n        const markup = `\n            <a><span class=\"main__carousel__circle main__carousel__circle js-dots\" data-pos=\"${carouselImage.order}\"></span></a>\n        `;\n\n        if(document.querySelector('.main__carousel__indicators'))\n            document.querySelector('.main__carousel__indicators').insertAdjacentHTML('beforeend', markup);\n\n    }\n\n\n    renderCarousel(carousel) {\n        let num = 0;\n        carousel.forEach(this.renderCarouselImage);\n\n        // for( var i = 0; i < carousel.length; i++) {\n        //     num++;\n        //     this.renderCarouselDots(carousel[i], num);\n            \n        // }\n        carousel.forEach(this.renderCarouselDots);\n\n    }\n\n}\n\n\n//# sourceURL=webpack:///./js/view/carouselView.js?");

/***/ }),

/***/ "./js/view/cartView.js":
/*!*****************************!*\
  !*** ./js/view/cartView.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CartView; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./js/view/base.js\");\n/* harmony import */ var _miscData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./miscData */ \"./js/view/miscData.js\");\n/* harmony import */ var _Utility_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utility/utilities */ \"./js/Utility/utilities.js\");\n\n\n\n\nclass CartView {\n    \n    constructor() {\n        this.totalBill = 0;\n        this.utility = new _Utility_utilities__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    }\n\n    renderProductOnCart(product) {\n\n        const markup = `\n            <div class=\"cart-modal__body__item\" data-product-name=\"${product.productName}\" \n                data-product-id=\"${product.productId}\" data-product-category=\"${product.productCategory}\"\n                data-product-price=\"${product.productPrice}\" data-product-stock=\"${product.productStock}\"\n                data-product-sku=\"${product.productSku}\" data-product-imageUrl=\"${product.productImageurl}\"\n                data-product-desc=\"${product.productDesc}\" data-product-current-count=\"${product.productCurrentCount}\">\n\n                <div class=\"cart-item-img\">\n                    <img src=\"./.${product.productImageurl}\" />\n                </div>                        \n                <div class=\"cart-item-desc\">\n                    <div class=\"cart-item-desc__title\">\n                        <span class=\"\">${product.productName}</span>\n                    </div>\n                    <div class=\"cart-item-desc__info\">\n                            <div class=\"cart-item-desc__info-left\">\n                                <a class=\"js-btn-minus\">\n                                    <i class=\"fa fa-minus fa-cart-tablet js-btn-minus\" aria-hidden=\"true\"></i>\n                                </a>\n                                <span class=\"cart-item-qauntity\">${product.productCurrentCount}</span>\n                                <a class=\"js-btn-add\">\n                                    <i class=\"fa fa-plus fa-cart-tablet js-btn-add\" aria-hidden=\"true\"></i>\n                                </a>\n                                \n                                <span class=\"cart-item-price\">\n                                    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n                                    Rs. ${product.productPrice}\n                                </span>\n                            </div>\n                        \n                        <div class=\"cart-item-desc__info-right\">\n                            <span class=\"\">Rs. ${product.productCurrentCount * product.productPrice}</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        `;        \n        \n        if(_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].cartDynamic)\n            _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].cartDynamic.insertAdjacentHTML('beforeend', markup);\n        \n    }\n\n    calculateBill(products) {\n\n        products.forEach((elem) => this.calculateBill(elem));\n\n        let productBill = (+(product.productCurrentCount)) * (+(product.productPrice));\n        this.totalBill += productBill;\n    }\n\n    renderResult(products) {\n        \n        //emty the contents of cart dynamic div\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].cartDynamic.innerHTML = \"\";\n        products.forEach(this.renderProductOnCart);\n    }\n\n\n    updateCartBillUI() {\n        let totalBill = 0;\n        let totalProducts = 0;\n\n        let cartData = JSON.parse(localStorage.getItem('cartData'));\n        let cartLength = 0;\n\n        if(cartData !== null) {\n            cartData.forEach((product) => {\n                totalProducts += +(product.productCurrentCount);\n                totalBill += (+(product.productCurrentCount)) * (+(product.productPrice));\n            });\n        }\n\n        //Update # of items in cart header\n        if(_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].countInCart) {\n            _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].countInCart.innerHTML = `(${totalProducts} items)`;\n        }\n\n        //Update total bill items in cart bottom\n        if(_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].cartBillAmount)\n            _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].cartBillAmount.innerHTML = `Rs. ${totalBill}`;\n       \n    }\n\n    getProductClicked(event) {\n        \n        /* --> From the click event of minus/add btn, get the nearest matching plp card's \n        *  data attributes and store that data in productData\n        */\n        const productData = event.target.closest('.cart-modal__body__item').dataset; \n        return productData;\n    }\n\n\n    updateProductInCartUI(event, product) {\n        let productBill = 0;\n\n        //find the span in this event and set its content to the count of the product\n        const countSpan = event.target.closest('.cart-modal__body__item').querySelector('.cart-item-qauntity'); \n        const productBillDiv = event.target.closest('.cart-modal__body__item').querySelector('.cart-item-desc__info-right'); \n        \n        productBill = +(product.productCurrentCount) * +(product.productPrice);\n        productBillDiv.innerHTML = `Rs. ${productBill}`;\n\n        countSpan.innerHTML = product.productCurrentCount;\n    }\n}\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./js/view/cartView.js?");

/***/ }),

/***/ "./js/view/errorNotifs.js":
/*!********************************!*\
  !*** ./js/view/errorNotifs.js ***!
  \********************************/
/*! exports provided: errorNotifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"errorNotifications\", function() { return errorNotifications; });\nconst errorNotifications = {\n    emptyInput: \"Please fill the input field\",\n    invalidEmail: \"Please enter a valid email\",\n    invalidPassword: \"Password should contain atleast one uppercasse\",\n    shortPassword: \"Password length should be atleast 6 characters\",\n    weakPassword: \"Your password strength is weak. Include atleast 1 uppercase, 1 lowercase and 1 special character\",\n    goodPassword: \"Your password strength is good. You may further include  1 uppercase, 1 lowercase and 1 special character to make it stronger\",\n    strongPassword: \"You have a strong Password!\",\n    shortPassword: \"Your password should be atleast 6 character long, include atleast 1 uppercase, 1 lowercase and 1 special character\",\n    passwordMismatch: \"Your passwords do not match! please enter again.\"\n};\n\n//# sourceURL=webpack:///./js/view/errorNotifs.js?");

/***/ }),

/***/ "./js/view/formView.js":
/*!*****************************!*\
  !*** ./js/view/formView.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FormView; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./js/view/base.js\");\n/* harmony import */ var _miscData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./miscData */ \"./js/view/miscData.js\");\n/* harmony import */ var _errorNotifs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errorNotifs */ \"./js/view/errorNotifs.js\");\n/* harmony import */ var _Utility_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utility/utilities */ \"./js/Utility/utilities.js\");\n\n\n\n\n\nclass FormView {\n    \n    constructor(form) {\n        this.form = form;\n        this.utility = new _Utility_utilities__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    }\n\n    firstFocus() {\n        //first field in form gets the focus\n        // this.form[0].focus();\n        return true;\n    }\n\n\n    hideError(el) {\n        let container = el.parentElement;\n        let queryString = '.' + container.className + ' .js-form__input-error';\n        let errorDiv = document.querySelector(queryString);\n\n        // if(errorDiv.classList.contains('show')) {\n            this.utility.hide(errorDiv);\n        // }\n    }\n\n\n    displayOkMessage (el, msg) {\n        \n        let queryString = '.' + el.parentElement.className + ' .js-form__input-error';\n        let msgDiv = document.querySelector(queryString);\n        this.utility.show(msgDiv);\n        this.utility.showAsOkText(msgDiv);\n        msgDiv.innerHTML = msg;\n    }\n\n\n    displayMessage(el, msg) {\n        \n        let queryString = '.' + el.parentElement.className + ' .js-form__input-error';\n        let errorDiv = document.querySelector(queryString);\n        this.utility.show(errorDiv);\n        this.utility.showAsErrorText(errorDiv);\n        errorDiv.innerHTML = msg;\n    }\n\n\n    checkForEmpty(input) {\n        if(input.value === \"\") {\n            this.displayMessage(input.parentElement, _errorNotifs__WEBPACK_IMPORTED_MODULE_2__[\"errorNotifications\"].emptyInput);\n\n            //bring focus to the input field\n            input.focus();\n            return true;\n        } else {    //input is not empty, do not show error\n            return false;  \n        }\n    }\n\n\n    confirmPassword(password, confirmPassword) {\n        if(password.value !== confirmPassword.value)\n            return false;\n        else\n            return true;\n    }\n\n\n    validateEmail(email) {\n        var validEmail = /^(([^<>()[\\]\\\\.,;:\\s@\\\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\\\"]+)*)|(\\\".+\\\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n\n        if(email.value == '') {\n            \n            return 0;\n            // return errorNotifications.emptyInput;\n\n        } else { //email was not empty\n               \n            if(!validEmail.test(email.value)) { //email is invalid\n                // return errorNotifications.invalidEmail;\n                return 2;\n    \n            } else {    //email was valid\n                        //hide error div if previously shown\n                return 1;\n            }\n        }\n    }\n\n\n    scorePassword(password) {\n        let score = 0;\n        if (!password.value) {\n           \n            return score;\n        }\n           \n    \n        // award every unique letter until 5 repetitions\n        let letters = new Object();\n        for (var i = 0; i < password.value.length; i++) {\n            letters[password.value[i]] = (letters[password.value[i]] || 0) + 1;\n            score += 5.0 / letters[password.value[i]];\n        }\n    \n        // bonus points for mixing it up\n        let variations = {\n            digits: /\\d/.test(password.value),\n            lower: /[a-z]/.test(password.value),\n            upper: /[A-Z]/.test(password.value),\n            nonWords: /\\W/.test(password.value),\n        }\n    \n        let variationCount = 0;\n        for (var check in variations) {\n            variationCount += (variations[check] == true) ? 1 : 0;\n        }\n        score += (variationCount - 1) * 10;\n    \n        return parseInt(score);\n    }\n\n\n\n    checkPasswordStrength(password) {\n        let score = this.scorePassword(password);\n        return score;\n    }\n\n}\n\n//# sourceURL=webpack:///./js/view/formView.js?");

/***/ }),

/***/ "./js/view/hamburgerView.js":
/*!**********************************!*\
  !*** ./js/view/hamburgerView.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HamburgerView; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./js/view/base.js\");\n/* harmony import */ var _miscData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./miscData */ \"./js/view/miscData.js\");\n\n\n\nclass HamburgerView {\n    \n    constructor() {}\n\n    renderHamburgerDiv() { \n\n    }\n}\n\n//# sourceURL=webpack:///./js/view/hamburgerView.js?");

/***/ }),

/***/ "./js/view/homeView.js":
/*!*****************************!*\
  !*** ./js/view/homeView.js ***!
  \*****************************/
/*! exports provided: default, renderCarousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HomeView; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderCarousel\", function() { return renderCarousel; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./js/view/base.js\");\n\n\nclass HomeView {\n    constructor() {}\n\n    rendercategory (category ) {\n        const markup = `\n            <section class=\"card card-shadow js-home-card my-4\" data-category=\"fruits\">\n                <div class=\"card__img\">\n                    <img src=\"./.${category.imageUrl}\" alt = \"${category.name}\"/>\n                </div>\n    \n                <div class=\"card__content\">\n                    <h2>${category.name}</h2>\n                    <span>${category.description}</span>\n                    <a href=\"#\" class=\"btn btn-primary card__content__btn p-4\">\n                        Explore ${category.name}\n                    </a>\n                </div>\n            </section>\n        `;\n        \n        if (_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].homePageContent)\n            _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].homePageContent.insertAdjacentHTML('beforeend', markup);\n    }\n\n    renderResults  (categories) {\n        //update cart count in the header\n        // var cartData;\n        // cartData = JSON.parse(localStorage.getItem('cartData'));\n        // if (cartData !== null)\n        //     elements.headerCartCountDiv.textContent = cartData.length + (cartData.length === 1 ? ' item' : ' items');\n    \n        categories.forEach(this.rendercategory);\n    }\n}\n\n//Renders each category one by one\n\n\n\nconst renderCarousel = carouselImages => {\n    // carouselImages.forEach(renderCarouselImage);\n    // carouselImages.(renderCarouselImage);\n    // carouselImages[0].(renderCarouselImage);\n\n    const carouselImage = carouselImages[0];\n\n    const markup = `\n            <div id=\"main-carousel\" class=\"main__carousel\" >\n                <img src=\"./.${carouselImage.bannerImageUrl}\" \n                    alt=\"${carouselImage.bannerImageAlt}\"\n                    class=\"main__carousel__img\" />\n            </div>\n        `;\n    \n    if (_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].homePageContent)\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].homePageContent.insertAdjacentHTML('afterbegin', markup);\n}\n\n//# sourceURL=webpack:///./js/view/homeView.js?");

/***/ }),

/***/ "./js/view/miscData.js":
/*!*****************************!*\
  !*** ./js/view/miscData.js ***!
  \*****************************/
/*! exports provided: miscData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"miscData\", function() { return miscData; });\nconst miscData = {\n    categoryFruits: \"5b6899953d1a866534f516e2\",\n    categoryBakery: \"5b6899953d1a866534f516e2\",\n    categoryBeverages: \"5b6899953d1a866534f516e2\",\n    categoryBeauty: \"5b6899953d1a866534f516e2\",\n    categoryBaby: \"5b6899683d1a866534f516e0\"\n};\n\n//# sourceURL=webpack:///./js/view/miscData.js?");

/***/ }),

/***/ "./js/view/productsView.js":
/*!*********************************!*\
  !*** ./js/view/productsView.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ProductsView; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./js/view/base.js\");\n/* harmony import */ var _miscData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./miscData */ \"./js/view/miscData.js\");\n\n\n\nclass ProductsView {\n    \n    constructor() {}\n\n    renderComponent() {\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].productsContainer.insertAdjacentHTML(\"afterbegin\", this.markup(data)); \n    }\n\n    renderProduct (product) {\n        const markup =  `\n        <article class=\"plp-card\" data-product-id=\"${product.id}\" data-product-name=\"${product.name}\"\n            data-product-imageUrl=\"${product.imageURL}\" data-product-desc=\"${product.description}\" \n            data-product-price=\"${product.price}\" data-product-category=\"${product.category}\" \n            data-product-stock=\"${product.stock}\" data-product-sku=\"${product.sku}\">\n            \n            <h2>${product.name}</h2>\n        \n            <div class=\"plp-card__content\">\n                <div class=\"plp-card__content__img-text\">\n                    <div class=\"plp-card__img\">\n                        <img src=\"./.${product.imageURL}\" alt=\"${product.name}\"/>\n                    </div>\n                    <div class=\"plp-card__desc-container\">\n                        <span class=\"plp-card__desc\">\n                            ${product.description}\n                        </span>\n                        <a href=\"\" class=\"plp-card__cta btn btn-primary hide-on-tablet js-btn-buy\">\n                            Buy Now @ MRP Rs.${product.price}\n                        </a>\n                    </div>\n                </div>\n\n                <div class=\"plp-card__content__price\">\n                    <span class=\"plp-card-price show-on-desktop js-btn-buy\">MRP Rs.87</span>\n                    \n                    <div class=\"btn-on-tablet\">\n                        <a class=\"plp-card__cta  btn btn-primary hide-on-mobile show-on-tablet hide-below-desktop js-btn-buy\">\n                            Buy Now @ MRP Rs.${product.price}\n                        </a>\n                    </div>\n                \n                    <a class=\"plp-card__cta-tabs btn btn-primary show-on-desktop js-btn-buy\">\n                        Buy Now\n                    </a>\n\n                </div>\n            </div>\n        </article>\n    `;\n\n        if(_base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].plpPageContent)\n            _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].plpPageContent.insertAdjacentHTML('beforeend', markup);\n    }\n\n\n    renderProducts ( products) {\n        //render only for category Fruits at first\n        // products.forEach(renderProduct);\n        //update cart count in the header\n       \n        this.cartData = JSON.parse(localStorage.getItem('cartData'));\n       \n        const fruitItems = products.filter(function(item) {\n            return item.category == _miscData__WEBPACK_IMPORTED_MODULE_1__[\"miscData\"].categoryFruits;\n        });\n\n        fruitItems.forEach(this.renderProduct);\n    }\n\n\n    /* Send the selected Product on click of BUY button to the products model\n    */\n    getProductClicked(event) {\n        debugger;\n        \n        /* --> From the click event of buy btn, get the nearest matching plp card's \n        * data attributes and store that data in productData\n        */\n        const productData = event.target.closest('.plp-card').dataset;        \n        return productData;\n    }\n\n\n    updateHeaderNav(cartLength) {\n        _base__WEBPACK_IMPORTED_MODULE_0__[\"elements\"].headerCartCountDiv.innerHTML = cartLength + ' items';\n    }\n\n}\n  \n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./js/view/productsView.js?");

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