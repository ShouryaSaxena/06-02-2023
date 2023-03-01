
const Arr = ['1','a','2','b','3','c','4','d','5','e'];
//console.log(typeof(Arr));
let val: Array<String|Number>;
val = [];

for(let i = 0; i <Arr.length; i++){
    if(!isNaN(parseFloat(Arr[i]))){
        //console.log(Arr[i]);
        let num = parseInt(Arr[i]);
        val[i] = num;
        console.log(num+" is of type " +typeof(num));
    }
    else{
       let low = Arr[i].toUpperCase();
       val[i] = low;
    }
}
console.log(val);