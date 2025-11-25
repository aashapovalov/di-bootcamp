function makeJuice(size){
  let ingredients = [];

  function addIngredients(ingredient1, ingredient2, ingredient3) {
    ingredients.push(ingredient1);
    ingredients.push(ingredient2);
    ingredients.push(ingredient3);
  }

  function displayJuice(arrayOfJuices) {
    let parElement = document.createElement("p");
    parElement.textContent = `The client wants a ${size} juice, containing ${arrayOfJuices.join(", ")}`;
    document.body.append(parElement);
  }
  addIngredients("Vodka", "Vodka", "Vodka");
  addIngredients("Vodka", "Vodka", "Vodka");
  displayJuice(ingredients);
}

makeJuice("large");