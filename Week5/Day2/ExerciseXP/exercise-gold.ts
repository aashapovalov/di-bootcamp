// Exercise 1: Class Inheritance with Protected Access Modifiers
// What You Will Learn:
//
//     How to use protected access modifiers in a base class.
// How to create a class that extends a base class and reuses its properties and methods.
//     How to add new functionality to the derived class.
//
//
// Instructions
// Create a base class Employee with the following:
//
//     A protected property name of type string.
// A protected property salary of type number.
// A method getDetails() that returns the employee’s name and salary.
//     Then create a derived class Manager that:
//
//     Inherits from Employee.
//     Adds a public property department of type string.
// Overrides the getDetails() method to include the department information.
//     Finally, create a new instance of the Manager class and call the getDetails() method.
//
class Employee {
    constructor(
        protected name: string,
        protected salary: number,
    ) {}
    getDetails() {
        return [this.name, this.salary];
    }
}

class Manager extends Employee {
    constructor(
        protected name: string,
        protected salary: number,
        public department: string,
    ) {
        super(name, salary);
    }
    getDetails() {
        return [this.name, this.salary, this.department];
    }
}

const manager = new Manager("Mike", 10000, "Accounting")
console.log(manager.getDetails());
//
//     Exercise 2: Using Readonly with Access Modifiers
// What You Will Learn:
//
//     How to use the readonly modifier with class properties.
//     How to combine readonly with other access modifiers.
//     How to ensure properties cannot be modified after initialization.
//
//
//     Instructions
// Create a class Car with the following properties:
//
//     A readonly and public property make of type string.
// A readonly and private property model of type string.
// A public property year of type number.
// Create a method getCarDetails() that returns the make, model, and year of the car. Attempt to modify the make and model properties after the car is instantiated, and observe the results.
//
class Car {
    constructor(
        public readonly make: string,
        private readonly model: string,
        public year: number,
    ) {
    }
    getCarDetails() {
        return [this.make, this.year, this.model];
    }
}
//
//     Exercise 3: Static Properties and Methods in Classes
// What You Will Learn:
//
//     How to define and use static properties and methods.
//     How to access static members directly on the class without creating an instance.
//     When to use static properties for shared data or utility methods.
//
//
//     Instructions
// Create a class MathUtils with:
//
// A static property PI with a value of 3.14159.
//     A static method circumference(radius: number) that returns the circumference of a circle given its radius.
//     Use the PI static property inside the circumference method. Call the method without creating an instance of MathUtils.
class MathUtils {
    static PI = 3.14159;
    static circumference(radius: number) {
        return (2*radius*this.PI).toFixed(2);
    }
}

console.log(MathUtils.circumference(5))
//
//
//     Exercise 4: Interface with Function Types
// What You Will Learn:
//
//     How to define an interface with a function type.
// How to implement the function type in classes.
//     How to ensure function signatures follow the interface contract.
//
//
// Instructions
// Create an interface Operation with a function type that takes two numbers and returns a number. Create two classes Addition and Multiplication, both implementing the Operation interface. Each class should define the function to perform the respective operation.
//
//     Create instances of both classes and use them to perform operations on two numbers.
//
interface Operation {
    type(a: number, b: number): number
}
class Addition implements Operation {
    type(a: number, b: number) {
        return a + b;
    }
}

class Multiplication implements Operation {
    type(a: number, b: number): number {
        return a*b;
    }
}



//
//     Exercise 5: Extending Interfaces with Optional and Readonly Properties
// What You Will Learn:
//
//     How to extend an interface to add more properties.
//     How to use optional and readonly properties in extended interfaces.
//
//
//     Instructions
// Create an interface Shape with a property color of type string and a method getArea().
// Extend the interface with a new interface Rectangle that adds properties
// width and height (both readonly) and a method getPerimeter().
//
// Implement the Rectangle interface in a class and provide implementations for the methods.
//

interface Shape {
    color: string;
    getArea(): number;
}

interface Rectangle extends Shape {
    readonly width: number;
    readonly height: number;
    getPerimeter(): number;
}

class RectangleClass implements Rectangle {
    constructor(
        public width: number,
        public height: number,
        public color: string,
    ) {
    }
    getArea() {
        return this.width*this.height;
    }

    getPerimeter(): number {
        return this.width*2 + this.height*2;
    }
}