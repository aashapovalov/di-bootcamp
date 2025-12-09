// Exercise 1: Union Types
// What You Will Learn:
//     How to use union types for flexible parameter handling.
//     How to implement logic that processes different types.
//     How to return appropriately formatted results based on the input type.
//     Description:
//
// You’ll create a function that accepts either a string or a number. The function formats numbers as currency and reverses strings. This exercise demonstrates how to use union types and handle different input types.
//
//     Instructions
// Create the Function:
//
//     Write a function called processValue that accepts one parameter of type string | number.
//     If the input is a number, format it as a currency string (e.g., $100.00).
// If the input is a string, return the reversed version of the string.
//     Test the Function:
//
//     Call the processValue function with different inputs (both strings and numbers) to verify functionality.

function processValue(parameter: string | number): string {
    if (typeof parameter === "number") {
        return `$${parameter.toFixed(2).toString()}`
    } else if (typeof parameter === "string") {
        return `$${parameter.split("").reverse().join("")}`
    }
}

const testValues = [
    0,               // simple number
    5,               // small number
    12.5,            // float number
    9999.999,        // number requiring rounding
    -42.3,           // negative number
    1000000,         // large number

    "",              // empty string
    "abc",           // short string
    "TypeScript",    // normal string
    "12345",         // numeric string (still string case)
    "A man a plan a canal Panama", // string with spaces
    "✨👋😊",         // unicode string
];

for (const val of testValues) {
    console.log(val, "→", processValue(val));
}

//
//     Exercise 2: Array Type Annotations
// What You Will Learn:
//     How to specify array types in TypeScript.
//     How to perform array operations like summing values.
//     Description:
//
// Create a function that takes an array of numbers, strings, or both, and sums only the numbers. You’ll practice working with arrays of different types and using type guards.
//
//     Instructions
// Create the Function:
//     Write a function named sumNumbersInArray that accepts an array of number | string.
//     Iterate through the array and sum only the number values, ignoring strings.
//
//     Test the Function:
//
//     Test sumNumbersInArray with different arrays containing both numbers and strings.
//
function sumNumbersInArray(array: (number | string)[]): number {
    let sum = 0;
    for (const element of array) {
        if (typeof element === "number") {
            sum += element;
        }
    }
    return sum;
}

const testArrays = [
    [1, 2, 3],                    // only numbers → sum = 6
    ["1", "2", "3"],              // only strings → sum = 0 (strings ignored)
    [1, "2", 3],                  // mixed values → sum = 4
    [10, "hello", 20],            // ignore non-numeric strings
    ["a", "b", "c"],              // all ignored → sum = 0
    [100, "200", "x", 50],        // only real numbers → sum = 150
    [],                           // empty array → 0
    [0, "0", 5],                  // 0 included → 5
    ["5", "5", 5],                // only numbers → 5
    ["100", 200, "300", 400]      // only number types counted → 200 + 400 = 600
];

for (const arr of testArrays) {
    console.log("Input:", arr, " → Output:", sumNumbersInArray(arr));
}
//     Exercise 3: Type Aliases
// What You Will Learn:
//     How to create and use type aliases for custom types.
//     How to structure more complex objects for better maintainability.
//     Description:
//
// You’ll create a type alias representing a user with multiple properties and write a function that processes the object to return a formatted string, including additional information if an optional property is present.
//
//     Instructions
// Define a Type Alias:
//     Create a type alias called AdvancedUser that represents a user object with the properties: name, age, and an optional address.
//
//     Implement the Function:
//
//     Write a function introduceAdvancedUser that takes an AdvancedUser and returns a greeting message including the user’s name and age.
//     If the address property is present, include it in the greeting message.
//
//     Test the Function:
//
//     Test introduceAdvancedUser with and without the address property.

type AdvancedUser = {
    name: string,
    age: number,
    address?: string,
}

function introduceAdvancedUser(userObj: AdvancedUser) {
    if (userObj.address) {
        return `Greetings, ${userObj.name}, ${userObj.age} years old from ${userObj.address}!`;
    }
    return `Greetings, ${userObj.name}, ${userObj.age} years old!`;
}

const testUsers: AdvancedUser[] = [
    { name: "Alice", age: 25 },                      // no address
    { name: "Bob", age: 30, address: "123 Main St" },// with address
    { name: "Charlie", age: 40, address: "" },       // empty string address
    { name: "Dana", age: 18 },                       // minimal valid user
    { name: "Eve", age: 55, address: "Tel Aviv" },   // different address
];
for (const user of testUsers) {
    console.log("Input:", user);
    console.log("Output:", introduceAdvancedUser(user));
    console.log("-----");
}

//
//     Exercise 4: Optional Parameters
// What You Will Learn:
//     How to use optional parameters and set default values.
//     How to handle multiple input scenarios with conditional logic.
//     Description:
//
// Create a function with an optional parameter for a greeting. Use conditional logic to apply a default greeting if none is provided.
//
//     Instructions
// Create the Function:
//     Write a function welcomeUser that takes a required name and an optional greeting.
//     If no greeting is provided, use "Hello" as the default.
//
// Test the Function:
//
//     Test welcomeUser with and without a custom greeting.
function welcomeUser(name: string, greeting?: string): string {
    if (greeting) {
        return `${name}, ${greeting}!`;
    }
    return `Hello, ${name}!`;
}

console.log(welcomeUser("Alice"));
// Expected: "Hello, Alice"

console.log(welcomeUser("Bob", "Welcome"));
// Expected: "Welcome, Bob"

console.log(welcomeUser("Charlie", ""));
// Expected: ", Charlie"  (if empty string is allowed)

console.log(welcomeUser("Dana", undefined));
// Expected: "Hello, Dana"

console.log(welcomeUser("Eve", "Hi there"));
// Expected: "Hi there, Eve"