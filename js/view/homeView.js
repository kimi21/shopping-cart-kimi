import { elements } from './base';

export default class HomeView {
    constructor() {}

    rendercategory (category ) {
        const markup = `
            <section class="card card-shadow js-home-card" data-category="fruits">
                <div class="card__img">
                    <img src="./.${category.imageUrl}" alt = "${category.name}"/>
                </div>
    
                <div class="card__content">
                    <h2>${category.name}</h2>
                    <span>${category.description}</span>
                    <a href="#" class="btn card__content__btn">
                        Explore ${category.name}
                    </a>
                </div>
            </section>
        `;
        
        if (elements.homePageContent)
            elements.homePageContent.insertAdjacentHTML('beforeend', markup);
    }

    renderResults  (categories) {
        //update cart count in the header
        var cartData;
        cartData = JSON.parse(localStorage.getItem('cartData'));
        if (cartData !== null)
            elements.headerCartCountDiv.textContent = cartData.length + (cartData.length === 1 ? ' item' : ' items');
    
        categories.forEach(this.rendercategory);
    }
}

//Renders each category one by one



export const renderCarousel = carouselImages => {
    // carouselImages.forEach(renderCarouselImage);
    // carouselImages.(renderCarouselImage);
    // carouselImages[0].(renderCarouselImage);

    const carouselImage = carouselImages[0];

    const markup = `
            <div id="main-carousel" class="main__carousel" >
                <img src="./.${carouselImage.bannerImageUrl}" 
                    alt="${carouselImage.bannerImageAlt}"
                    class="main__carousel__img" />
            </div>
        `;
    
    if (elements.homePageContent)
        elements.homePageContent.insertAdjacentHTML('afterbegin', markup);
}