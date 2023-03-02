<<<<<<< HEAD
/*-------------------------Access Modifiers----------------------

    public - (default) allows access to the class member from anywhere
    private - only allows access to the class member from within the class
    protected - allows access to the class member from itself and any classes that inherit it,
    which is covered in the inheritance section below

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.setDetails = function (name, age) {
        this.name = name;
        this.age = age;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getDetails = function () {
        console.log(this.getName()); //private function called here
        console.log(this.age);
    };
    return Student;
}());
//-------- New class User (Child Class of Student)-----------
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User.prototype.message = function (age) {
        // uname = this.name;          -------name was a private member thus cannot be accessed outside that class directly.
        console.log("Your age is " + age); //accessing the Student's private member. 
    };
    return User;
}(Student));
var s = new Student;
var u = new User;
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.setDetails = function (name, age) {
        this.name = name;
        this.age = age;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getDetails = function () {
        console.log(this.getName()); //private function called here
        console.log(this.age);
    };
    return Student;
}());
//-------- New class User (Child Class of Student)-----------
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    User.prototype.message = function (age) {
        // uname = this.name;          -------name was a private member thus cannot be accessed outside that class directly.
        console.log("Your age is " + age); //accessing the Student's private member. 
    };
    return User;
}(Student));
var s = new Student;
var u = new User;
s.setDetails("Shourya", 21);
// s.getName();    ------------This will throw an error as it is protected function.
s.getDetails();
u.message(21);
>>>>>>> cbfd0a1b0c0c555bd3620b6cb346c3cc453373e6
