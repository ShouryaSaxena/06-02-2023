class Area{

    squarearea (s) {
        console.log(`The area of square is: ${s*s}`);
    }

    trianglearea (base,height) {
        console.log(`The area of square is: ${(base * height) / 2}`);
    }

    circlearea (r) {
        console.log(`The area of square is: ${Math.PI * r * r}`);
    }

}
let ar = new Area();

sq = () => {
    var s = prompt("Enter the Length of side: ");
    if(isNaN(s)) {alert("invalid dimension")}
    ar.squarearea(s);
}

tr = () => {
    var base = prompt("Enter the Base-length: ");
    if(isNaN(base)) {alert("invalid dimension")}
    var height = prompt("Enter the Height: ");
    if(isNaN(height)) {alert("invalid dimension")}
    ar.trianglearea(base,height);
}

cr = () => {
    var r = prompt("Enter the Radius: ");
    if(isNaN(r)) {alert("invalid dimension")}
    ar.circlearea(r);
}