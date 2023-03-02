<<<<<<< HEAD
"use strict";
/*-----------------------OOP's Concepts in Typescript--------------
    Abstraction:    abstract classes and variables.
    Encapsulation:    private, protected and public members.
    PolyMorphism:    Overloading and Overriding.
    Inheritance: implements and extends...(Task-1).
-----------------------------------------------------------------*/
class Details {
    constructor(name, city, age) {
        this.Name = name;
        this.City = city;
        this.Age = age;
    }
    getFullAddress() {
        return `${this.Name}, ${this.City}, ${this.Age}`;
    }
}
class user extends Details {
    constructor(name, city, age) {
        super(name, city, age); //parent class members can be accessed using super keyword.
        console.log(`${name} belongs to ${city}, and is ${age}yrs old.`);
    }
}
//-------------------------Object Creation-----------------------------
let user1 = new user("Shourya", "Jaipur", 21);
let user2 = new user("Yashraj", "Rudrapur", 22);
let user3 = new user("Nancy", "Delhi", 20);
function add(a, b) {
    return a + b;
}
console.log(add("Strings-", "Added")); // calls function-1 & returns "Strings-Added".
console.log(add(10, 20)); // calls function-2 & returns 30.
//console.log(add(true,true));    ------- will throw error as no such overloaded function present.
=======
"use strict";
/*-----------------------OOP's Concepts in Typescript--------------
    Abstraction:    abstract classes and variables.
    Encapsulation:    private, protected and public members.
    PolyMorphism:    Overloading and Overriding.
    Inheritance: implements and extends...(Task-1).
-----------------------------------------------------------------*/
class Details {
    constructor(name, city, age) {
        this.Name = name;
        this.City = city;
        this.Age = age;
    }
    getFullAddress() {
        return `${this.Name}, ${this.City}, ${this.Age}`;
    }
}
class user extends Details {
    constructor(name, city, age) {
        super(name, city, age); //parent class members can be accessed using super keyword.
        console.log(`${name} belongs to ${city}, and is ${age}yrs old.`);
    }
}
//-------------------------Object Creation-----------------------------
let user1 = new user("Shourya", "Jaipur", 21);
let user2 = new user("Yashraj", "Rudrapur", 22);
let user3 = new user("Nancy", "Delhi", 20);
function add(a, b) {
    return a + b;
}
console.log(add("Strings-", "Added")); // calls function-1 & returns "Strings-Added".
console.log(add(10, 20)); // calls function-2 & returns 30.
//console.log(add(true,true));    ------- will throw error as no such overloaded function present.
>>>>>>> cbfd0a1b0c0c555bd3620b6cb346c3cc453373e6
