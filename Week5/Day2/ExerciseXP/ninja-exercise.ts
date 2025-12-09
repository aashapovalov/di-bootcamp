// Exercise 1: Advanced Access Modifiers and Inheritance
// What You Will Learn:
//
//     How to use private, protected, and public access modifiers in a complex inheritance structure.
//     How to use protected methods to allow access in derived classes but restrict them from outside use.
//     How to extend multiple levels of inheritance while maintaining encapsulation and overriding methods.
//
//
//     Instructions:
// Create a base class Employee with the following properties:
//
//     name (public), age (private), and salary (protected).
//     Include a protected method calculateBonus that calculates a bonus based on the salary.
//     Now create a class Manager that extends Employee and
//     overrides a method getSalaryDetails to include a bonus calculation using the calculateBonus method.
//     Finally, create another class ExecutiveManager that further extends Manager and introduces a new method approveBudget.
//
//     Create an instance of ExecutiveManager, and ensure the encapsulation of private and protected members.

class Employee {
    constructor(
        public name: string,
        private age: number,
        protected salary: number
    ) {}

    protected calculateBonus() {
        return this.salary * 0.1;
    }

    getSalaryDetails() {
        return `Base salary: ${this.salary}`;
    }
}

class Manager extends Employee {
    getSalaryDetails() {
        const bonus = this.calculateBonus();
        return `Salary: ${this.salary}, Bonus: ${bonus}`;
    }
}

class ExecutiveManager extends Manager {
    approveBudget(amount: number) {
        return `${this.name} approved a budget of $${amount}.`;
    }
}
//
//     Exercise 2: Advanced Static Methods and Properties
// What You Will Learn:
//
//     How to define and use static properties and methods in TypeScript.
//     How to combine static methods and properties with inheritance and how to override them in derived classes.
//
//
//     Instructions:
// Create a base class Shape with a static method getType that returns the type of the shape.
// Define a static property totalShapes to count how many instances of any shape have been created.
// Extend the class to Circle and Square, each with its own area calculation.
// Override the static method getType in each subclass.
//
//     Ensure that you track the total number of shapes created using the totalShapes static property.
class Shape {
    static TotalShapes: number = 0;
    constructor() {
        Shape.TotalShapes ++
    }
    static getType(){
        return Shape;
    }
}

class Circle extends Shape {
    constructor(
        public radius: number,
    ) {
        super();
    }
    getArea() {
        return this.radius**2*Math.PI;
    }
}

class Square extends Shape {
    constructor(
        public side: number,
    ) {
        super();
    }
    getArea() {
        return this.side**2;
    }
}

const square = new Square(2)
const circle = new Circle(2)
console.log(`Total object count = ${Shape.TotalShapes}`)



//
//
//     Exercise 3: Complex Interfaces with Function Types
// What You Will Learn:
//
//     How to use function types in interfaces.
//     How to define complex objects with methods inside interfaces and enforce type safety.
//
//
// Instructions:
//     Create an interface Calculator with properties for two numbers (a and b),
//     and a method operate that accepts a function for performing an operation (addition, subtraction, multiplication, etc.).
//     The operate method should apply the passed function to a and b and return the result.
//
//     Then, create a class AdvancedCalculator that implements this interface and can perform operations
//     like add, subtract, and multiply.
interface Calculator {
    a: number,
    b: number,
    method(func: (a: number, b: number) => number): number
}

class AdvancedCalculator implements Calculator {
    static addition(a: number, b: number) {
        return a + b;
    }
    static subtraction(a: number, b: number) {
        return a - b;
    }
    static multiplication(a: number, b: number) {
        return a*b;
    }
    constructor(
        public a: number,
        public b: number,
    ) {
    }
    method(method: (a: number, b: number) => number) {
        return method(this.a, this.b);
    }
}
//
//
//     Exercise 4: Readonly Properties in Complex Inheritance
// What You Will Learn:
//
//     How to use readonly properties in a more advanced scenario with multiple inheritance.
//     How to prevent modification of properties in base and derived classes using readonly.
//
//
// Instructions:
//     Create a base class Device with a readonly property serialNumber.
//     Extend it with a class Laptop that adds additional properties like model and price.
//     Ensure that the serialNumber is immutable but model and price can be updated.
//     Override a method to return the device information including the serialNumber.
//
class Device {
    constructor(
        readonly serialNumber: number,
    ) {
    }
}

class Laptop extends Device {
    constructor(
        readonly serialNumber: number,
        public model: string,
        public price: number,
    ) {
        super(serialNumber);
    }
    getDetails() {
        return `The device "${this.model}" has serial number ${this.serialNumber} and price ${this.price}`;
    }
}
//
//     Exercise 5: Extending Multiple Interfaces with Optional and Readonly Properties
// What You Will Learn:
//
//     How to extend multiple interfaces and combine optional and readonly properties.
//     How to enforce complex type rules using interfaces and inheritance.
//
//
//     Instructions:
// Create an interface Product with properties name (readonly), price, and an optional discount.
// Then, create another interface Electronics that extends Product and adds a property warrantyPeriod.
// Finally, create a class Smartphone that implements the Electronics interface and calculates the price after discount.
//
//     Ensure that the name is immutable, and the discount is optional.
interface Product {
    readonly name: string,
    price: number,
    discount?: number,
}

interface Electronics extends Product {
    warrantyPeriod: number
}

class Smartphone implements Electronics {
    constructor(
        readonly name: string,
        public price: number,
        public warrantyPeriod: number,
        public discount?: number
    ) {
    }
    getPrice() {
        if (this.discount) {
            return this.price*(1-this.discount);
        }
        return this.price;
    }
}