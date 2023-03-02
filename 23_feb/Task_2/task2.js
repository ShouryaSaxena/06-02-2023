Go = () => {
    
    A = document.getElementById('name').value; 
    document.getElementById('head').style.color = 'red';                            // style for h1 changed
    document.getElementById('head').innerHTML = "Hello " + A +", Welcome to J_Scolars!";
    document.getElementById('text').style.fontStyle = 'italic';                     // style for p changed
    document.getElementById('image').src = '/23_feb/images/img2.jpg'                // image changed when button clicked...
    

}