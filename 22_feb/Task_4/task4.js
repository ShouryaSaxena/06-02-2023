<<<<<<< HEAD


SI = () => {

    var principle = document.getElementById("pa");
    var rate = document.getElementById("r");
    var years = document.getElementById("t");

    a = parseFloat(principle.value);
    b = parseFloat(rate.value);
    c = parseFloat(years.value);
    if (a!=null && b!=null && c!=null) {
        try {
            if (a<0 || b<0 || c<0) {
                throw "Invalid Values!!"
            }
            else{
                document.getElementById('txt').innerHTML = `Simple Interest (S.I.) is: ${(a * b * c)/100} `;
            }
        } catch (error) {
            document.getElementById('txt').innerHTML = `Error: Enter Positive Values Only `;
        }
        
    }
    
}


CI = () => {

    var principle = document.getElementById("pa");
    var rate = document.getElementById("r");
    var years = document.getElementById("t");

    a = parseFloat(principle.value);
    b = parseFloat(rate.value);
    c = parseFloat(years.value);

    if (a!=null && b!=null && c!=null) {
        try {
            if (a<0 || b<0 || c<0) {
                throw "Invalid Values!!"
            }
            else{
                document.getElementById('txt').innerHTML = `Compound Interest (C.I.) is: ${a * (Math.pow((1 + b /100),c))} `;
            }
        } catch (error) {
            document.getElementById('txt').innerHTML = `Error: Enter Positive Values Only `;
        }
        
    }
    
    
=======


SI = () => {

    var principle = document.getElementById("pa");
    var rate = document.getElementById("r");
    var years = document.getElementById("t");

    a = parseFloat(principle.value);
    b = parseFloat(rate.value);
    c = parseFloat(years.value);
    if (a!=null && b!=null && c!=null) {
        try {
            if (a<0 || b<0 || c<0) {
                throw "Invalid Values!!"
            }
            else{
                document.getElementById('txt').innerHTML = `Simple Interest (S.I.) is: ${(a * b * c)/100} `;
            }
        } catch (error) {
            document.getElementById('txt').innerHTML = `Error: Enter Positive Values Only `;
        }
        
    }
    
}


CI = () => {

    var principle = document.getElementById("pa");
    var rate = document.getElementById("r");
    var years = document.getElementById("t");

    a = parseFloat(principle.value);
    b = parseFloat(rate.value);
    c = parseFloat(years.value);

    if (a!=null && b!=null && c!=null) {
        try {
            if (a<0 || b<0 || c<0) {
                throw "Invalid Values!!"
            }
            else{
                document.getElementById('txt').innerHTML = `Compound Interest (C.I.) is: ${a * (Math.pow((1 + b /100),c))} `;
            }
        } catch (error) {
            document.getElementById('txt').innerHTML = `Error: Enter Positive Values Only `;
        }
        
    }
    
    
>>>>>>> cbfd0a1b0c0c555bd3620b6cb346c3cc453373e6
}