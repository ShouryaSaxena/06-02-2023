
/*-----------------------OOP's Concepts in Typescript--------------
    Abstraction:    abstract classes and variables.
    Encapsulation:    private, protected and public members.
    PolyMorphism:    Overloading and Overriding.
    Inheritance: implements and extends...(Task-1).
-----------------------------------------------------------------*/

abstract class Details {               // Abstract class Details. We cannot create instances of any abstract class.    
    private Name: string;
    private City: string;
    protected Age: number;               // Encapsulation provides a safety to the members of class. Private members cannot be accessed outside the class.

    constructor(name: string, city: string, age: number) {
        this.Name = name;
        this.City = city;
        this.Age = age;
    }

    public getFullAddress(): string {
        return `${this.Name}, ${this.City}, ${this.Age}`;
    }
}

class user extends Details {
    constructor(name: string, city: string, age: number) {       //Polymorphism helps in overloading and overriding a method or function.
        super(name, city, age);             //parent class members can be accessed using super keyword.
        console.log(`${name} belongs to ${city}, and is ${age}yrs old.`)
    }

}

//-------------------------Object Creation-----------------------------

let u1 = new user("Shourya", "Jaipur", 21);
let u2 = new user("Yashraj", "Rudrapur", 22);
let u3 = new user("Nancy", "Delhi", 20);


//-----------------------Function Overloading in TS---------------------------

//function-1
function add(a:string, b:string):string;       // Concatination of two Strings.

//function-2
function add(a:number, b:number): number;      // Addition of two Numbers.

function add(a: any, b:any): any {
    return a + b;
}

console.log(add("Strings-", "Added")); // calls function-1 & returns "Strings-Added".
console.log(add(10, 20));              // calls function-2 & returns 30.
//console.log(add(true,true));    ------- will throw error as no such overloaded function present.
