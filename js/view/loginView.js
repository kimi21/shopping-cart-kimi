import { elements } from './base';

//update cart count in the header
cartData = localStorage.getItem('cartData');
elements.headerCartCountDiv.textContent = cartData.length + (cartData.length === 1 ? ' item' : ' items');