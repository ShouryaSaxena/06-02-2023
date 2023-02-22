SI = () => {

    var principle = document.getElementById("pa");
    var rate = document.getElementById("r");
    var years = document.getElementById("t");

    a = parseFloat(principle.value);
    b = parseFloat(rate.value);
    c = parseFloat(years.value);
    document.getElementById('txt').innerHTML = `Simple Interest (S.I.) is: ${(a * b * c)/100} `;
}

CI = () => {

    var principle = document.getElementById("pa");
    var rate = document.getElementById("r");
    var years = document.getElementById("t");

    a = parseFloat(principle.value);
    b = parseFloat(rate.value);
    c = parseFloat(years.value);
    document.getElementById('txt').innerHTML = `Compound Interest (C.I.) is: ${a * (Math.pow((1 + b /100),c))} `;
}