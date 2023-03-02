/*-------------------------------- Access Modifiers using TypeScript-------------------------------------

1. access modifiers can only bne used in typecript files
2. access modifiers are denoted with public,private and protected keywords
3. by default all the members inside of the class are defined publicly


//public -- can be accessed anywhere in the program
// private -- are only accessible within its class scope
//protected -- accessible within its class scope as well as the class extending the parent class containing the protected member


-------------------------------------------------example ------------------------------------------------*/
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
var Patient = /** @class */ (function () {
    function Patient(name) {
        this.name = name;
    }
    //making a public function to wish the patient with name    
    Patient.prototype.intro = function () {
        console.log("Hello, Good Morning ".concat(this.name));
    };
    Patient.prototype.printid = function () { console.log(this.convertString(this.id)); }; // using the private function inside the class itself     
    //private    
    Patient.prototype.convertString = function (num) {
        return num.toString();
    };
    //protected    
    Patient.prototype.getid = function (pid) {
        return this.id = pid;
    };
    return Patient;
}());
// creating a inherited class Doctor
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Doctor.prototype.docid = function () {
        console.log("Doctor id is " + this.getid(1234)); // calling the getid function inside the inherited class doctor   
    };
    return Doctor;
}(Patient));
//creating object of class Patient
var A = new Patient("Shourya");
A.intro();
//creating object of class Doctor
var B = new Doctor("Yash");
B.intro();
B.docid();
/*console.log(obj.convertString());
 let num = 23;
 console.log(convertString(num));       -----------> This will return an error message because convertString is an private method and cannot be used outside the class
*/ 
