/*--------------------Class having various objects---------------------*/
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var arr = []; //----------this array will store objects of class Person.
console.log(typeof (arr));
// ---------------------On clicking Submit Button----------------------------
function submitting() {
    console.clear();
    var first = document.getElementById("Fname").value;
    console.log(typeof (first));
    var last = document.getElementById("Lname").value;
    console.log(typeof (last));
    var age = parseInt(document.getElementById("age").value);
    console.log(typeof (age));
    var p = new Person(); //--------------new constant object for class Person.
    p.firstName = first;
    p.lastName = last;
    p.age = age;
    arr.push(p); //-----------Pushing object p into the array.
    // Clearing inputs after pushing and submitting
    document.getElementById("Fname").value = "";
    document.getElementById("Lname").value = "";
    document.getElementById("age").value = "";
}
// Function to display all stored values(data)
function display() {
    console.clear();
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
