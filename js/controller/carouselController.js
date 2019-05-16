
import Utility from '../Utility/utilities';
import CarouselView from '../view/carouselView';
import Carousel from '../model/carousel';
import { elements } from '../view/base';

export default class CarouselController {
    constructor(container) {
        this.view = new CarouselView(container);
        this.model = new Carousel();
        this.utility = new Utility();
    }

    async loadCarousel() {
        //1) create new Home(model) object and add to state
        // this.state.Carousel = this.model; 
    
        //2) get the carousel images 
        const carousel = await this.model.getCarousel();
        console.log("Fetching carousel...");
    
        //3) render results on UI
        this.view.renderCarousel(carousel);
    
        //render carousel
        // homeView.renderCarousel(carousel);

        console.log('loadCategories  was called from homeController');
    }


} 