

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
