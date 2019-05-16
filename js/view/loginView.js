import { elements } from './base';

//update cart count in the header
cartData = localStorage.getItem('cartData');
elements.headerCartCountDiv.innerHTML = cartData.length + ' items';