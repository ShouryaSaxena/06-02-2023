<<<<<<< HEAD

//-------Array of Cities--------
let arr = ["Select", "Delhi", "Mumbai", "Lucknow", "Kashmir", "Goa", "Jaipur"];
const routes = [];                 // Constant array of objects for storing the routes.


let s = document.getElementById('board');
let d = document.getElementById('drop');


//-----------------------Adding Options for Source----------------------------
for (let i = 0; i < arr.length; i++) {
    let opt = document.createElement('option');
    opt.textContent = arr[i];
    opt.value = arr[i];
    s.appendChild(opt);
}


//--------------------Adding Options for Destination---------------------------
for (let i = 0; i < arr.length; i++) {
    let opt2 = document.createElement('option');
    opt2.textContent = arr[i];
    opt2.value = arr[i];
    d.appendChild(opt2);
}


// -------------------------Matching and disable for Source select-----------------------
match1 = (select) => {
    let sel = select.selectedIndex;

    for (let i = 0; i < d.options.length; i++) {


        if (i == 0) {
            d.options[i].disabled = true;
            continue;
        }
        if (i === sel) {
            d.options[sel].disabled = true;
            continue;
        }
        d.options[i].disabled = false;
    }


// --------------------------Disabling Already present Routes-------------------------

    for (let i = 0; i < routes.length; i++) {
        if (routes[i].from === select.value) {
            for (let j = 0; j < arr.length; j++) {
                if (d.options[j].value === routes[i].to) {
                    var z = d[j];
                    d.options[j].disabled = true;
                    console.log(z);
                }
            }

        }
    }

}


// -------------------------Matching and disable for Destination select----------------------
match2 = (select) => {
    let sel = select.selectedIndex;

    for (let i = 0; i < s.options.length; i++) {

        if (i == 0) {
            s.options[i].disabled = true;
            continue;
        }
        if (i === sel) {
            s.options[sel].disabled = true;
            continue;
        }
        s.options[i].disabled = false;
    }

// --------------------------Disabling Already present Routes-------------------------

    for (let i = 0; i < routes.length; i++) {
        if (routes[i].to === select.value) {
            for (let j = 0; j < arr.length; j++) {
                if (s.options[j].value === routes[i].from) {
                    var z = s.options[j];
                    s.options[j].disabled = true;
                    console.log(z);
                }
            }

        }
    }

}


//----------------------------Displaying All the routes and then Reset options-----------------
printing = () => {
    let source = document.getElementById('board').value;
    let dest = document.getElementById('drop').value;

    if (source === "Select" || dest === "Select"){
        console.log("Select a Valid Option...")
        return;
    }
    for (let i = 0; i < routes.length; i++) {                     //checking if there's already present same route or not.
        if (routes[i].from === source && routes[i].to === dest) {
            return;     //if already present, no need to push it.
        }

    }
    d.options[d.selectedIndex].disabled = true;


    var r = { from: source, to: dest };       //Pushing the new route info as a new object.
    routes.push(r);


    document.getElementById('out').innerHTML += `<br>${source} to ${dest}`;     //Displaying the routes choosen.

    d.selectedIndex = 0;
    s.selectedIndex = 0;
    for(let i = 0; i<arr.length; i++){
        s.options[i].disabled = false;
        d.options[i].disabled = false;
    }
}

//-------------------Clear the display (list of routes)-------------------
function clearroute() {
    document.getElementById("out").innerHTML = "";
    location.reload;                // Relodes the Page;
    console.clear();
}

=======


//-------Array of Cities--------
let arr = ["Select","Delhi","Mumbai","Lucknow","Kashmir","Goa","Jaipur"];

let s = document.getElementById('board');
let d = document.getElementById('drop');


//-----------------------Adding Options for Source----------------------------
for(let i = 0; i < arr.length; i++){
    let opt = document.createElement('option');
    opt.textContent = arr[i];
    opt.value = arr[i];
    s.appendChild(opt);
}


//--------------------Adding Options for Destination---------------------------
for(let i = 0; i < arr.length; i++){
    let opt2 = document.createElement('option');
    opt2.textContent = arr[i];
    opt2.value = arr[i];
    d.appendChild(opt2);
}


// -------------------------Matching and disable for Source select-----------------------
match1 = (select) => {
    let sel = select.selectedIndex;


    for(let i = 0; i < d.options.length; i++){
        if(i==0){
            d.options[i].disabled=true;
            continue;
        }
        if(i === sel){
            d.options[sel].disabled = true;
            continue;
        }
        d.options[i].disabled = false;
    }
    
}


// -------------------------Matching and disable for Destination select----------------------
match2 = (select) => {
    let sel = select.selectedIndex;
    
    for(let i = 0; i < s.options.length; i++){
        if(i==0){
            s.options[i].disabled=true;
            continue;
        }
        if(i === sel){
            s.options[sel].disabled = true;
            continue;
        }
        s.options[i].disabled = false;
    }
    
} 

const routes = [];                 // Constant array of objects for storing the routes.


//----------------------------Checking old routes and displaying all-----------------
printing = () => {
    let source = document.getElementById('board').value;
    let dest = document.getElementById('drop').value;
    
    for(let i =0;i<routes.length;i++){                     //checking if there's already present same route or not.
        if(routes[i].from === source && routes[i].to === dest ){
            return;      //if already present, no need to push it.
        }
    }
    
    
    var r = {"From": source, "To": dest};       //Pushing the new route info as a new object.
    routes.push(r);

    document.getElementById('out').innerHTML += `<br>${source} to ${dest}`;     //Displaying the routes choosen.
    console.log(routes);


}

//-------------------Clear the display (list of routes)-------------------
clear = () => {
    document.getElementById('out').innerHTML =" ";
}
>>>>>>> cbfd0a1b0c0c555bd3620b6cb346c3cc453373e6
