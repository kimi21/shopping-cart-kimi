// import Products from './model/products';

import Category from './model/home';
import Products from './model/products';

import * as productsView from './view/productsView';
import * as homeView from './view/homeView';


// const products = new Products();
// console.log(products);
// console.log(products.getProducts());

/** Global state of the app
 * - Product Object
 * - Category Object
 */

const state = {};

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



elements.plpPageContent.querySelector('.btn-buy').addEventListener('click', e => {
    e.preventDefault();
    // controlSearch();
    console.log("Event : ");
    console.log(e);
});





// const card_list = document.querySelectorAll('.js-home .js-home-card .card__img');
// const card_array = [...card_list];

// card_array.forEach((card) => {
//     card.addEventListener('click', () => {
//         console.log("You pressed this card!");
//     });
// })

