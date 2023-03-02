<<<<<<< HEAD

/*--------------------Class having various objects---------------------*/

class Person {
    firstName: string;
    lastName: string;
    age: number;
}

const arr = [];       //----------this array will store objects of class Person.
console.log(typeof(arr));

// ---------------------On clicking Submit Button----------------------------

function submitting() {
    console.clear();
    let first = (<HTMLInputElement>document.getElementById("Fname")).value;
    console.log(typeof(first));
    let last = (<HTMLInputElement>document.getElementById("Lname")).value;
    console.log(typeof(last));
    let age = parseInt((<HTMLInputElement>document.getElementById("age")).value);
    console.log(typeof(age));

    const p = new Person();      //--------------new constant object for class Person.
    p.firstName = first;
    p.lastName = last;
    p.age = age;

    arr.push(p);                //-----------Pushing object p into the array.


    // Clearing inputs after pushing and submitting

    (<HTMLInputElement>document.getElementById("Fname")).value = "";     
    (<HTMLInputElement>document.getElementById("Lname")).value = "";
    (<HTMLInputElement>document.getElementById("age")).value = "";

}


// Function to display all stored values(data)

function display(): void {
    console.clear();
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
=======

/*--------------------Class having various objects---------------------*/

class Person {
    firstName: string;
    lastName: string;
    age: number;
}

const arr = [];       //----------this array will store objects of class Person.
console.log(typeof(arr));

// ---------------------On clicking Submit Button----------------------------

function submitting() {
    console.clear();
    let first = (<HTMLInputElement>document.getElementById("Fname")).value;
    console.log(typeof(first));
    let last = (<HTMLInputElement>document.getElementById("Lname")).value;
    console.log(typeof(last));
    let age = parseInt((<HTMLInputElement>document.getElementById("age")).value);
    console.log(typeof(age));

    const p = new Person();      //--------------new constant object for class Person.
    p.firstName = first;
    p.lastName = last;
    p.age = age;

    arr.push(p);                //-----------Pushing object p into the array.


    // Clearing inputs after pushing and submitting

    (<HTMLInputElement>document.getElementById("Fname")).value = "";     
    (<HTMLInputElement>document.getElementById("Lname")).value = "";
    (<HTMLInputElement>document.getElementById("age")).value = "";

}


// Function to display all stored values(data)

function display(): void {
    console.clear();
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
>>>>>>> cbfd0a1b0c0c555bd3620b6cb346c3cc453373e6
}