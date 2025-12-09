//
// 🌟 Exercise 1: Intersection Types
// What You Will Learn:
// Combine multiple types into one.
// Create a type that includes all properties from several types.
// Task
// Define an intersection type PersonWithAddress that combines Person and Address types.
// Create a variable of this type with properties from both types.
// The Person type should contain name and age, the Address type should contain street and city,
type Person = {
    name: string;
    lastName: string;
    age: number;
}

type Address = {
    street: string;
    city: string;
}

type PersonWithAddress = Person & Address;

const person1: PersonWithAddress = {
    name: "Alex",
    lastName: "Rogers",
    age: 23,
    street: "Baker st",
    city: "London"
}

//
//
// 🌟 Exercise 2: Type Guards with Union Types
// What You Will Learn
// Use type guards to handle different types.
// Perform actions based on the input type.
// Task
// Create a function describeValue that accepts number | string.
// Use type guards to return a description based on the input type:
//
// "This is a number" for numbers.
// "This is a string" for strings.
function describeValue(val: number | string) {
    if (typeof val === "number") {
        return "This is a number";
    } else if (typeof val === "string") {
        return "This is a string";
    }
}

//
// 🌟 Exercise 3: Type Casting
// What You Will Learn
// Convert a variable from one type to another using type casting.
// Understand the difference between type casting and type assertions.
// Task
// Create a variable someValue of type any and cast it to a string. Then, use it as a string.
let someValue: any;
someValue = "hahaha";
console.log(someValue.length)
//
//
// 🌟 Exercise 4: Type Assertions with Union Types
// What You Will Learn
// Use type assertions to specify a type.
// Handle variables with union types.
// Task
// Create a function getFirstElement that takes an array of number | string
// and uses type assertions to return the first element as a string. Test with arrays of mixed types.
function getFirstElement(arr: string[] | number[]): string {
    return arr[0] as string
}
//
//
// 🌟 Exercise 5: Generic Constraints
// What You Will Learn
// Use generic constraints to limit type usage.
// Create a generic function that works with constrained types.
// Task
// Create a generic function logLength that takes a parameter of type T constrained to types with a length property
// (like string or Array). The function should log the length.
function logLength<T extends {length: number}>(arg: T[]): number {
    console.log(arg.length);
}
//
//
// 🌟 Exercise 6: Intersection Types and Type Guards
// What You Will Learn
// Combine types using intersection types.
// Use type guards to handle complex types safely.
// Task
// Define a type Employee that combines Person and Job using intersection types.
// Create a function describeEmployee that takes an Employee object and uses type guards
// to return a description based on whether the Job is a Manager or a Developer.
//
// Person type: name: string; age: number;
// Job type: position: string; department: string;
// Employee type should combine these.
// describeEmployee should return a specific message for each type of job.
type Persona = {
    name: string;
    age: number;
}
type Job = {
    position: string;
    department: string;
}
type Employee = Persona & Job;
function describeEmployee(employee: Employee) {
    switch (employee.position) {
        case "Manager":
            return `I'm a Manager`;
        case "Developer":
            return `I'm a Developer`;
        default:
            return `There is no such position ${employee.position}`;

    }
}
//
// 🌟 Exercise 7: Type Assertions and Generic Constraints
// What You Will Learn
// Use type assertions to refine types in complex scenarios.
// Apply generic constraints to ensure type safety.
// Task
// Create a generic function formatInput that takes a parameter of type T constrained to have a toString() method.
// Use type assertions to ensure the parameter is treated as a string for formatting.
// The function should format the input as a string.
function formatInput<T extends {toString(): string}>(arg: T): string {
    return arg.toString() as string
}
//
//
