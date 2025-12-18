const products = require("./products.js");

function searchProduct(prodName) {
  for (let item of products) {
    if (item.name.toLowerCase() === prodName.toLowerCase()) {
      return item;
    }
  }
  throw new Error(`Product "${prodName}" not found`);
}