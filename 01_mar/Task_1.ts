
/*-------------------------------Inheritance in Typescript------------------------------- */

//  1. Single inheritance: Derived class can inherit properties and behavior from at most one parent class.
//  2. Multilevel : Derived class inherits properties of another derived class which has inherited the properties of some parent class.


// Base (Parent) class........
class carModel {
    public model: string;
    constructor(model: string) {
        this.model = model;
    }
    Type(model: string): string {
        console.log(`\n${model} car section....`)
        return model;
    }
}

//---------------Single Inheriance------------------

class carName extends carModel {        //derived class car inherites Parent class Vehicle.
    protected name: string;
    constructor(model: string, name: string) {
        super(model);
        this.name = name;
    }
    Brand(model: string, name: string): string {
        this.Type(model);
        this.name = name;
        console.log(`${this.name} is a ${this.model} Model.`);
        return name;
    }
}

//--------------------MultiLevel Inheritance---------------------

//Derived class carModel inherits another Derived class Car
//which has inherited the properties of the Parent class Vehicle...

class carPrice extends carName {
    private cost: number;
    constructor(model: string, name: string, cost: number) {
        super(model, name);
        this.cost = cost;
    }
    Price(model: string, name: string, cost: number): number {
        this.Brand(model, name);
        console.log(`${this.name} worth ${this.cost} is not as costlier as other ${this.model} cars.`);
        return cost;
    }
}

//-------------------Object creation-------------------------

let obj1 = new carName("F1 race", "Buggati");
obj1.Brand("F1 race", "Buggati");

let obj2 = new carPrice("Sports", "Polo GT", 1050000);
obj2.Price("Sports", "Polo GT", 1050000);
obj2.Price("Classic", "Jaguar", 31900000);
