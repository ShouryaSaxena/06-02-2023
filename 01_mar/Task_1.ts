
/*-------------------------------Inheritance in Typescript------------------------------- */

//  1. Single inheritance: Derived class can inherit properties and behavior from at most one parent class.
//  2. Multilevel : Derived class inherits properties of another derived class which has inherited the properties of some parent class.


// Base (Parent) class........
class Vehicle {
    public A: string;
    constructor(A: string) {
        this.A = A;
    }
    Type(A: string): string {
        console.log(`\n${A} car section....`)
        return A;
    }
}

//---------------Single Inheriance------------------

class Car extends Vehicle {        //derived class car inherites Parent class Vehicle.
    protected B: string;
    constructor(A: string, B:string) {
        super(A);
        this.B = B;
    }
    Brand(A: string, B: string): string {
        this.Type(A);
        this.B = B;
        console.log(`${this.B} is a ${this.A} Model.`);
        return B;
    }
}

//--------------------MultiLevel Inheritance---------------------

//Derived class carModel inherits another Derived class Car
//which has inherited the properties of the Parent class Vehicle...

class carModel extends Car {
    private C: number;
    constructor(A: string, B:string, C:number) {
        super(A,B);
        this.C = C;
    }
    Price(A: string, B: string, C: number): string {
        this.Brand(A, B);
        console.log(`${this.B} worth ${this.C} is not as costlier as other ${this.A} cars.`);
        return B;
    }
}

//-------------------Object creation-------------------------

let obj1 = new Car("F1 race", "Buggati");
obj1.Brand("F1 race", "Buggati");

let obj2 = new carModel("Sports", "Polo GT", 1050000);
obj2.Price("Sports", "Polo GT", 1050000);
obj2.Price("Classic", "Jaguar", 31900000);
