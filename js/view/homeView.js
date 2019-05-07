import { elements } from './base';

//Renders each category
const rendercategory = category => {
    const markup = `
        <div class="card card-shadow js-home-card" data-category="fruits">
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
        </div>          
    `;
    
    elements.homePageContent.insertAdjacentHTML('beforeend', markup);
}


export const renderResults = categories => {
    categories.forEach(rendercategory);
}


//renders carousel
const renderCarouselImage = carouselImage => {
    const markup = `
        <div id="main-carousel" class="main__carousel" >
            <img src="./.${carouselImage.bannerImageUrl}" class="main__carousel__img" />
        </div>
    `;
    elements.homePageContent.insertAdjacentHTML('afterbegin', markup);
}


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
    elements.homePageContent.insertAdjacentHTML('afterbegin', markup);
}