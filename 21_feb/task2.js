star = ()=> {
    var row = prompt("Enter No. of rows: ");
    var col = prompt("Enter No. of columns: ");
    var i, j;
    for(i=0; i<row;i++){
        for (j = 0; j < col; j++) {
            if (i==0 || i==row-1) {
                document.write("\t*");
            }
            else if (j==0 || j==col-1) {
                document.write("\t*");
            }
            else{
                document.write("\t&nbsp&nbsp");
            }
        }
        document.write("<br>");
    }
}

pyramid = () => {

    var num = prompt("Enter No. of lines: ");

    var output="";
    for (var i = 0; i <num; i++) {
        var myspace = "";   
        for(let s = 0; s <(num-i-1); s++) {
            myspace += "\t&nbsp&nbsp";
        }
            for (var j = 1; j <= 2*i + 1; j++) {
                
                output+=("\t" + j);

            }
            document.write(myspace+output);
            document.write("<br>");
            output="";
        }
  
  }
