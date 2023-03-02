<<<<<<< HEAD

//------------------------------String Array-----------------------
const strArray = ['1', 'a', '2', 'b', '3', 'c', '4', 'd', '5', 'e'];

//console.log(typeof(Arr));
let newArray: Array<String | Number>;
newArray = [];

for (let i = 0; i < strArray.length; i++) {
    if (!isNaN(parseFloat(strArray[i]))) {
        //console.log(Arr[i]);
        let num: number = parseInt(strArray[i]);
        newArray[i] = num;
        console.log(num + " is of type " + typeof (num));
    }
    else {
        let low: string = strArray[i].toUpperCase();
        newArray[i] = low;
    }
}
=======

//------------------------------String Array-----------------------
const strArray = ['1', 'a', '2', 'b', '3', 'c', '4', 'd', '5', 'e'];

//console.log(typeof(Arr));
let newArray: Array<String | Number>;
newArray = [];

for (let i = 0; i < strArray.length; i++) {
    if (!isNaN(parseFloat(strArray[i]))) {
        //console.log(Arr[i]);
        let num: number = parseInt(strArray[i]);
        newArray[i] = num;
        console.log(num + " is of type " + typeof (num));
    }
    else {
        let low: string = strArray[i].toUpperCase();
        newArray[i] = low;
    }
}
>>>>>>> cbfd0a1b0c0c555bd3620b6cb346c3cc453373e6
console.log(newArray);