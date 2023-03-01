/*-------------------------------Inheritance in Typescript------------------------------- */
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
//  1. Single inheritance: Derived class can inherit properties and behavior from at most one parent class.
//  2. Multilevel : Derived class inherits properties of another derived class which has inherited the properties of some parent class.
// Base (Parent) class........
var Vehicle = /** @class */ (function () {
    function Vehicle(A) {
        this.A = A;
    }
    Vehicle.prototype.Type = function (A) {
        console.log("\n".concat(A, " car section...."));
        return A;
    };
    return Vehicle;
}());
//---------------Single Inheriance------------------
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(A, B) {
        var _this = _super.call(this, A) || this;
        _this.B = B;
        return _this;
    }
    Car.prototype.Brand = function (A, B) {
        this.Type(A);
        this.B = B;
        console.log("".concat(this.B, " is a ").concat(this.A, " Model."));
        return B;
    };
    return Car;
}(Vehicle));
//--------------------MultiLevel Inheritance---------------------
//Derived class carModel inherits another Derived class Car
//which has inherited the properties of the Parent class Vehicle...
var carModel = /** @class */ (function (_super) {
    __extends(carModel, _super);
    function carModel(A, B, C) {
        var _this = _super.call(this, A, B) || this;
        _this.C = C;
        return _this;
    }
    carModel.prototype.Price = function (A, B, C) {
        this.Brand(A, B);
        console.log("".concat(this.B, " worth ").concat(this.C, " is not as costlier as other ").concat(this.A, " cars."));
        return B;
    };
    return carModel;
}(Car));
//-------------------Object creation-------------------------
var obj1 = new Car("F1 race", "Buggati");
obj1.Brand("F1 race", "Buggati");
var obj2 = new carModel("Sports", "Polo GT", 1050000);
obj2.Price("Sports", "Polo GT", 1050000);
obj2.Price("Classic", "Jaguar", 31900000);
