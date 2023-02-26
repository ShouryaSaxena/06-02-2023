
let arr = ["Select","Delhi","Mumbai","Lucknow","Kashmir","Goa","Jaipur"];

let s = document.getElementById('board');
let d = document.getElementById('drop');

for(let i = 0; i < arr.length; i++){
    let opt = document.createElement('option');
    opt.textContent = arr[i];
    opt.value = arr[i];
    s.appendChild(opt);
}

for(let i = 0; i < arr.length; i++){
    let opt2 = document.createElement('option');
    opt2.textContent = arr[i];
    opt2.value = arr[i];
    d.appendChild(opt2);
}

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

const routes = [];

printing = () => {
    let source = document.getElementById('board').value;
    let dest = document.getElementById('drop').value;
    
    for(let i =0;i<routes.length;i++){
        if(routes[i].from === source && routes[i].to === dest ){return}
    }
    
    
    var r = {"From": source, "To": dest};
    routes.push(r);

    document.getElementById('out').innerHTML += `<br>${source} to ${dest}`;
    console.log(routes);


}

clear = () => {
    document.getElementById('out').innerHTML =" ";
}
