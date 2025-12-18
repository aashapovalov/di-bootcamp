const products = require("./products.js");

function searchProduct(prodName) {
  for (let item of products) {
    if (item.name.toLowerCase() === prodName.toLowerCase()) {
      return item;
    }
  }
  return null;
}
const result = searchProduct("Notebook");

if (result) {
  console.log("Product found:", result);
} else {
  console.log("Product not found.");
}
