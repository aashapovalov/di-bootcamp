let client = "John";

const groceries = {
  fruits : ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice : "20$",
  other : {
    paid : true,
    meansOfPayment : ["cash", "creditCard"]
  }
}

let displayGroceries = (groceries) => {
  groceries["fruits"].forEach(fruit => {console.log(fruit);});
}

displayGroceries(groceries);

let cloneGroceries = () => {
  let user = client;
  console.log(user);
  client = "Betty";
  console.log(user);
  groceries["totalPrice"] = "$35";
  groceries["other"]["paid"] = false
  console.log(groceries)

}

cloneGroceries()