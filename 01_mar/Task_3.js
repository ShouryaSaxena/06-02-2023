var Arr = ['1', 'a', '2', 'b', '3', 'c', '4', 'd', '5', 'e'];
//console.log(typeof(Arr));
var val;
val = [];
for (var i = 0; i < Arr.length; i++) {
    if (!isNaN(parseFloat(Arr[i]))) {
        //console.log(Arr[i]);
        var num = parseInt(Arr[i]);
        val[i] = num;
        console.log(num + " is of type " + typeof (num));
    }
    else {
        var low = Arr[i].toUpperCase();
        val[i] = low;
    }
}
console.log(val);
