
// ------------------------------------------Using for loop---------------------------------------------

function withFor() {
    var a = document.getElementById('num').value;
    var i, j, flag;
    document.write("Using for loop: ");
    for(i = 2; i<=a; i++)
    {
        flag = 1;

        for(j = 2; j<=i/2; j++)
        {
            if(i%j == 0){
                flag = 0;
                break;
            }
        }
        if (flag == 1) {
            document.write( i+ " , ");
        }
    }
   
}


// ------------------------------------------Using while loop---------------------------------------------

function withWhile() {
    var a = document.getElementById('num').value;
    var m=2, n=2, flag;
    document.write("Using While loop: ");
    while(m<=a){
        flag = 1;
        while (n<=m/2) {
            if (m%n == 0) {
                flag = 0;
                break;
            }
            n++;
        }
        if (flag == 1) {
            document.write( m+ " , ");
            console.log(m);
        }
        m++;
    }

}

// ------------------------------------------Using do-while loop---------------------------------------------

function withDo_While() {
    var a = document.getElementById('num').value;
    var m=2, n, flag;
    document.write("Using do-While loop: ");
    do{
        n=2;
        flag = 1;
        do{
            if (m!=2 && m%n == 0) {
                flag = 0;
                break;
            }
            n++;
        }while (n<=m/2);
        if (flag == 1) {
            document.write( m+ " , ");
        }
        m++;
    }while(m<=a);

}
