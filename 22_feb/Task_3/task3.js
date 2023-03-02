
/*-----------------------------------------------Static Class----------------------------------------------- */

class Students {
    constructor (name) {
        this.name = Students.capitalize(name);          // Static Methods can only be called using their class name.
    }
    exam() {
        console.log("Congratulations " + this.name + ", You have passed the examination.");
    }
    static capitalize(name) {                        // Static Method used
        return name.charAt(0).toUpperCase() + name.substr(1, name.length);  // will convert the first letter the name to UpperCase.
    }
}

let passed = new Students("shourya");                // New object for class Students formed.

passed.exam();
// console.log(passed.capitalize("hello"));     --------> This won't work as capitalize is a static method of Students class.
