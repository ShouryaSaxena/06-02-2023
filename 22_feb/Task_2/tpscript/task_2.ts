
/*-------------------------------- Access Modifiers using TypeScript-------------------------------------

1. access modifiers can only bne used in typecript files
2. access modifiers are denoted with public,private and protected keywords
3. by default all the members inside of the class are defined publicly                      


//public -- can be accessed anywhere in the program
// private -- are only accessible within its class scope
//protected -- accessible within its class scope as well as the class extending the parent class containing the protected member 


-------------------------------------------------example ------------------------------------------------*/

class Patient{
     public name:string;
     public id:Int16Array;            // available publicly    
     constructor(name:string){        //default constructor parameter type is string        
        this.name = name;
    }
    //making a public function to wish the patient with name    
    intro() {                                                   //default access of greet function is also public        
        console.log(`Hello, Good Morning ${this.name}`)
    }
    printid(){console.log(this.convertString(this.id));}        // using the private function inside the class itself     
    

    //private    
    private convertString(num){                                 // can only be used within its class scope/boundary        
        return num.toString();
    }


    //protected    
    protected getid(pid){                                     // protected method can only be used within its class or in the inherited class        
        return this.id = pid;
    }
}
    
// creating a inherited class Doctor
class Doctor extends Patient{
    docid(){
        console.log("Doctor id is "+ this.getid(1234));        // calling the getid function inside the inherited class doctor   
    }
}

//creating object of class Patient
let A = new Patient("Shourya");
A.intro();


//creating object of class Doctor
let B = new Doctor("Yash");
B.intro();
B.docid();

/*console.log(obj.convertString());
 let num = 23;
 console.log(convertString(num));       -----------> This will return an error message because convertString is an private method and cannot be used outside the class
*/