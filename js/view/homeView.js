import { elements } from './base';

export default class HomeView {
    constructor() {}

    rendercategory (category ) {
        /*const markup = `
            <section class="card card-shadow js-home-card my-4" data-category="fruits">
                <div class="card__img">
                    <img src="./.${category.imageUrl}" alt = "${category.name}"/>
                </div>
    
                <div class="card__content">
                    <h2>${category.name}</h2>
                    <span>${category.description}</span>
                    <a href="#" class="btn btn-primary card__content__btn p-4">
                        Explore ${category.name}
                    </a>
                </div>
            </section>
        `;*/
        
        if (elements.homePageContent)
            elements.homePageContent.insertAdjacentHTML('beforeend', markup);
    }

    renderResults  (categories) {
        
        var categoryTemplate = require('../../partials/product-categories.hbs');
        console.log('categories',categories);
        elements.homePageContent.innerHTML = categoryTemplate(categories);
      
    }
}

