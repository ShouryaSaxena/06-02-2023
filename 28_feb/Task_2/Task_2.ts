<<<<<<< HEAD

/*-------------------------Access Modifiers---------------------- 

    public - (default) allows access to the class member from anywhere
    private - only allows access to the class member from within the class
    protected - allows access to the class member from itself and any classes that inherit it,
    which is covered in the inheritance section below

*/


class Student {
    private name: string;        // can only be called and used in it's own class.

    protected age: number;       // can be called and used in it's own class or it's child classes only.

    setDetails(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    private getName() {    //Private Function  
        return this.name;
    }

    public getDetails(): any {   //can be used throughout the program directling using class name.
        console.log(this.getName());  //private function called here
        console.log(this.age);
    }
}



//-------- New class User (Child Class of Student)-----------

class User extends Student {       //User Extends all the properties of Student.
    message(age: number) {
        // uname = this.name;          -------name was a private member thus cannot be accessed outside that class directly.

        console.log(`Your age is ` + age);  //accessing the Student's private member. 
    }

}

const s = new Student;
const u = new User;

s.setDetails("Shourya", 21);
// s.getName();    ------------This will throw an error as it is protected function.
s.getDetails();

u.message(21);

=======

/*-------------------------Access Modifiers---------------------- 

    public - (default) allows access to the class member from anywhere
    private - only allows access to the class member from within the class
    protected - allows access to the class member from itself and any classes that inherit it,
    which is covered in the inheritance section below

*/


class Student {
    private name: string;        // can only be called and used in it's own class.

    protected age: number;       // can be called and used in it's own class or it's child classes only.

    setDetails(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    private getName() {    //Private Function  
        return this.name;
    }

    public getDetails(): any {   //can be used throughout the program directling using class name.
        console.log(this.getName());  //private function called here
        console.log(this.age);
    }
}



//-------- New class User (Child Class of Student)-----------

class User extends Student {       //User Extends all the properties of Student.
    message(age: number) {
        // uname = this.name;          -------name was a private member thus cannot be accessed outside that class directly.

        console.log(`Your age is ` + age);  //accessing the Student's private member. 
    }

}

const s = new Student;
const u = new User;

s.setDetails("Shourya", 21);
// s.getName();    ------------This will throw an error as it is protected function.
s.getDetails();

u.message(21);

>>>>>>> cbfd0a1b0c0c555bd3620b6cb346c3cc453373e6
