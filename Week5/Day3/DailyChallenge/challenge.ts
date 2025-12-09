// Description:
//     Create a function handleData that processes an array of mixed types. The array can contain objects with different structures. Implement type guards to handle each type of object and perform specific operations based on their structure.
//
//     Instructions:
// 1. Define the following types:
//
type User = {
        type: 'user';
        name: string;
        age: number;
    };

type Product = {
    type: 'product';
    id: number;
    price: number;
};

type Order = {
    type: 'order';
    orderId: string;
    amount: number;
};
//
//
// 2. Create a function handleData that accepts an array of User | Product | Order. Implement type guards to:
//
//     For User objects, return a greeting message with the user’s name and age.
//     For Product objects, return a message with the product ID and its price.
//     For Order objects, return a summary of the order with its ID and amount.
function handleData(arr: (User | Product | Order)[] ): void {
    arr.forEach((element: Product | Order | User) => {
        switch (element.type) {
            case "user":
                console.log(`Greetings ${element.name} ${element.age}`)
                break;
            case "product":
                console.log(`This is ${element.price} with a price of $${element.price}`);
                break;
            case "order":
                console.log(`This is order ${element.orderId} with an amount of $${element.amount}`);
                break;
            default:
                console.log("Unknown element type");
        }
    })
}
//
// 3. Ensure your function handles unexpected cases gracefully.