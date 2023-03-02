<<<<<<< HEAD


change = () => {
    let A = document.getElementById('Switch').innerText;


    switch (A) {
        case "On":
            
            document.getElementById('myImage').src = '/23_feb/images/pic_bulbon.gif';
            document.getElementById('Switch').innerHTML = "Off";
            break;

        default :
            document.getElementById('myImage').src = '/23_feb/images/pic_bulboff.gif';
            document.getElementById('Switch').innerHTML = "On";
            break;
    
    }

=======


change = () => {
    let A = document.getElementById('Switch').innerText;


    switch (A) {
        case "On":
            
            document.getElementById('myImage').src = '/23_feb/images/pic_bulbon.gif';
            document.getElementById('Switch').innerHTML = "Off";
            break;

        default :
            document.getElementById('myImage').src = '/23_feb/images/pic_bulboff.gif';
            document.getElementById('Switch').innerHTML = "On";
            break;
    
    }

>>>>>>> cbfd0a1b0c0c555bd3620b6cb346c3cc453373e6
}