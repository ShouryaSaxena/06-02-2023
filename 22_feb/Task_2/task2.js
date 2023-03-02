<<<<<<< HEAD

/*-------------------------------------Access Modifiers in Javascript-------------------------------------*/

//  Javascript treats every variable as a public variable.
/*  But, in the newer version of JavaScript (ECMAscript-6) 
   we use # before the variable name to make it a private variable. */

class Animal{
    valuePublic = 2;                          // This is by default a public variable.
    #valuesPrivate = 5;                       // But, this is a Private variable of class Animal.

    constructor (name) {
        this.name = name;
    }
    walk () {
        
        console.log( this.name + " can walk.");
        console.log( "Earlier, there were " + this.#valuesPrivate + " "+ this.name);       //  Private member can be accessed inside it's class.
        
    }
}

let animal = new Animal("Dogs");
animal.walk();
console.log( "Now, there are only " + animal.valuePublic +" "+ animal.name);     // Public variables can be accessed anywhere using the class name.

    //  This won't work...
/* console.log( "Earlier, there were " + this.#valuesPrivate + " "+ this.name);  
=======

/*-------------------------------------Access Modifiers in Javascript-------------------------------------*/

//  Javascript treats every variable as a public variable.
/*  But, in the newer version of JavaScript (ECMAscript-6) 
   we use # before the variable name to make it a private variable. */

class Animal{
    valuePublic = 2;                          // This is by default a public variable.
    #valuesPrivate = 5;                       // But, this is a Private variable of class Animal.

    constructor (name) {
        this.name = name;
    }
    walk () {
        
        console.log( this.name + " can walk.");
        console.log( "Earlier, there were " + this.#valuesPrivate + " "+ this.name);       //  Private member can be accessed inside it's class.
        
    }
}

let animal = new Animal("Dogs");
animal.walk();
console.log( "Now, there are only " + animal.valuePublic +" "+ animal.name);     // Public variables can be accessed anywhere using the class name.

    //  This won't work...
/* console.log( "Earlier, there were " + this.#valuesPrivate + " "+ this.name);  
>>>>>>> cbfd0a1b0c0c555bd3620b6cb346c3cc453373e6
   ------------->   Private Members cannot be accessed outside the class by any means.   */