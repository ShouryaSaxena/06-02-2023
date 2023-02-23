
match = (selectElement) => {

    //Getting all select elements
    const Arr = document.getElementsByClassName('mySelect');
    

    //Getting selected index
    let sel = selectElement.selectedIndex;
    //Disabling options at same index in other select elements
    for (var i = 0; i < Arr.length; i++) {
      if (i === sel){
        Arr[i].options[sel].disabled = true;
        continue; //Passing the selected Select Element
      }
      Arr.options[i].disabled = false;
      
    }
    
   
}


