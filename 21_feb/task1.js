
/*-------------------------------------------Error Handling in JavaScript-----------------------------------------------*/


// Error Handling is a technique by which we can handle the run-time/compile-time errors.
// We use Try-catch() method to perform Error Handling in Javascript
// In try{} we write what error can occur and in catch(){} we catch it and handle it.

setTimeout ( () => {
    console.log("No error in line-1...Checking...");
}, 2000)

try {
    console.log(XYZ)                                //Only if this error occurs, catch will run or else it won't.
} 

// It will be handled and the error will be shown as text but the script will continue to run without any error in the console.
catch (err) {
    console.log(err)                                  
}

// try-catch() can only handle the errors thrown by a synchronous code and not by the scheduled code.

/*
                        try {
                            setTimeout ( () => {
                                console.log("No error in line-2...Checking...");
                            }, 4000)                                                  // This will still throw an error.
                        }                                                             
                        catch (error) {
                            console.log("This is still an error!!")
                        }
 */

// to handle the errors in synchronous code such as setTimeout(),etc...we need to use try-catch inside the scope/code. 

setTimeout ( () => {
    try {
        console.log(ABC)                                          // Error
    } 
    catch (err) {
        console.log("Error: 1 error in line-3...Checking...");    //Handled
    }
}, 6000)

setTimeout ( () => {
    console.log("No error in line-4...Checking...");
}, 8000)

setTimeout ( () => {
    console.log("No error in line-5...Checking...");
}, 10000)



/*------------------------------Finally Clause-------------------------------- */

// if Finally{} is specified, it will work no matter the error is been handled successfully or not.
// it is used to handle errors which could not be handles in the catch() block.
// If in a function, try{} returns something, Finally will work before the function get's returned and terminated.

const f = () => {
    try {
        let a = 0;
        console.log("This is an Error");
        return a;                         // try returns the Value of a.
    } 
    catch (error) {
        console.log("This is an Error");
        console.log(p);
    }
    finally{
        console.log("This is the Final Catch!!")      // But before return statement, finally{} block will still get executed.
    }
}

f();

