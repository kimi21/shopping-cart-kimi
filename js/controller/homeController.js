import Home from "../model/home";
import HomeView from "../view/homeView";
import Utility from '../Utility/utilities';
import CarouselController from '../controller/carouselController';

import { elements } from '../view/base';

export default class HomeController {
    constructor(state) {
        this.view = new HomeView();
        this.model = new Home();
        this.utility = new Utility();
        this.state = state;
        this.carouselController = new CarouselController();        
    }

    initialize() {
        this.utility.updateHeaderNav(this.utility.getCartLength());
        this.carouselController.loadCarousel();
        this.carouselController.carouselEvenListener();

    }


    async loadCategories() {
    
        //1) create new Home (model) object and add to state
        this.state.Home = this.model; 
        console.log(this.state.Home);
    
        //2) get the categories and carousel images from
        //   Home object in home.js
        const categories = await this.model.getCategories();
        const carousel = await this.model.getCarousel();
        console.log("Fetching categories...");
    
        //3) render results on UI
        this.view.renderResults(categories);
        console.log('loadCategories  was called from homeController');
    }

} 