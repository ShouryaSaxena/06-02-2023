

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

}