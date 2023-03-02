
/*-------------------------------------------------------------------------------------------

    1. Interfaces define properties, methods, and events, which are the members of the interface.
    2. Interfaces contain only the declaration of the members.
    3. Interfaces are similar to Type Alias but are only applied to Object types.

---------------------------------------------------------------------------------------------*/

interface Details{
    name: string,
    age: number,
    gender: string
}
/*
let stud: Details = {                     // This will throw an error as the object has missing arguments as it's interface has.
    name: `Rohan Nanda`,
    age: 27,
}
*/
let user: Details = {
    name: `Rohan Nanda`,
    age: 27,
    gender: `Male`
}
console.log(user);

let user1: Details = {                   // The declaration of the arguments (pattern/sequence) can be different.
    name: `Sneha Kashyap`,
    gender: `Female`,
    age: 25
}
console.log(user1);


interface otherDetails extends Details {        // one interface can inherit other interface
    hobbies: string
}

let stud: otherDetails = {            // child interface holds all the properties of it's parent interface as well.
    name: "Ajay Kapoor",
    age: 41,
    gender: "Male",
    hobbies: "PC Gaming"
}
console.log(stud);




console.log("--------------Enums-----------------");

/*------------------------------------------------------------------------------------------
    
    1. An enum is a special "class" that represents a group of constants (unchangeable variables).
    2. Enums can either be string or numeric type.
    3. By default, Enums are numeric and initialize the first value as 0;

-------------------------------------------------------------------------------------------*/

enum  Days {
    // default first member will be at 0 and so on... 
    Monday = 1,        // but here we start from 1            
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
let count: number = 0;
console.log(Days);
for(let i in Days){
    count++;
    i = i+2;
}

console.log(`There are ${count/2} Days in a week.`)   
// Count/2 as enums are stored bot as key:value and value:key form.

console.log(`Thursday is the ${Days.Thursday}th Day of the Week`);


