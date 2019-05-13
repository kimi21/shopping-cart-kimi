import axios from 'axios';

export default class Home {
    constructor() {}

    async getCategories() {
        try {
            const res = await axios(`./server/categories/index.get.json`);
            // const result = res.data;
            return res.data;
        } catch (err) {
            alert(err);
        }
    }  
    
    async getCarousel() {
        try {
            const res = await axios(`./server/banners/index.get.json`);
            return res.data;
        } catch(err) {
            alert(err);
        }

    }
}