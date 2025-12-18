import { products } from './products.js';

function searchProduct(prodName) {
  for (let item of products) {
    if (item.name.toLowerCase() === prodName.toLowerCase()) {
      console.log(item);
    }
  }
}

searchProduct('Notebook');