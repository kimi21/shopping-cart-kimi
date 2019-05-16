import { elements } from './base';

//update cart count in the header
cartData = localStorage.getItem('cartData');
elements.headerCartCountDiv.innerHTML = cartData.length + (cartData.length === (1 || 0) ? ' item' : ' items');