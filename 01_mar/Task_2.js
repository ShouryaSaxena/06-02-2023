/*-----------------------OOP's Concepts in Typescript--------------
    Abstraction:    abstract classes and variables.
    Encapsulation:    private, protected and public members.
    PolyMorphism:    Overloading and Overriding.
    Inheritance: implements and extends...(Task-1).
-----------------------------------------------------------------*/
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
var Details = /** @class */ (function () {
    function Details(name, city, age) {
        this.Name = name;
        this.City = city;
        this.Age = age;
    }
    Details.prototype.getFullAddress = function () {
        return "".concat(this.Name, ", ").concat(this.City, ", ").concat(this.Age);
    };
    return Details;
}());
var user = /** @class */ (function (_super) {
    __extends(user, _super);
    function user(name, city, age) {
        var _this = _super.call(this, name, city, age) || this;
        console.log("".concat(name, " belongs to ").concat(city, ", and is ").concat(age, "yrs old."));
        return _this;
    }
    return user;
}(Details));
//-------------------------Object Creation-----------------------------
var u1 = new user("Shourya", "Jaipur", 21);
var u2 = new user("Yashraj", "Rudrapur", 22);
var u3 = new user("Nancy", "Delhi", 20);
function add(a, b) {
    return a + b;
}
console.log(add("Strings-", "Added")); // calls function-1 & returns "Strings-Added".
console.log(add(10, 20)); // calls function-2 & returns 30.
//console.log(add(true,true));    ------- will throw error as no such overloaded function present.
