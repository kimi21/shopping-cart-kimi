import axios from 'axios';

export default class Home {
    constructor() {}

    async getCategories() {
        try {
            const res = await axios(`/categories`);
            return res.data;
        } catch (err) {
            alert(err);
        }
    }  
    
    async getCarousel() {
        try {
            const res = await axios(`/banners`);      
            return res.data;
        } catch(err) {
            alert(err);
        }

    }
}