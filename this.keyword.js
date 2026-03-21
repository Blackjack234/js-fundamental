// "this" keyword in javascript (Implicit binding)
// Explain "this" keyword? 

/*
"this" is a keyword that refers to the object that is currently executing the function.

The value of "this" is determined by how a function is called, not where it is defined.

*/

this.a = 5

const fun = ()=>{
    console.log(this);
    
}


fun()



let user = {
    name:"Anirban",
    age:29,
    getDetails(){
        console.log(this.name,"Targetting the parent object");
        
    }
}

user.getDetails()



let user1 = {
    name:"Anirban",
    age:29,
    childObj:{
        newName : "Nirmal",
           getDetails(){
        console.log(this.newName,"and",this.name);
        
    }
    }
 
}

user1.childObj.getDetails()


// normal function this is reffer to its immidiate parent object only for this example.


let user3 = {
name :'Priyas',
getDetails:()=>{
 console.log(this.name);
 
}
}


user3.getDetails()

// in this above example the arrow function is poninting to the window object this not the imedeate parent object. o/p undefind.


let user4 ={
    name :"Akash",
    getDetails(){
       const newNested = ()=> console.log(this.name);
       newNested()
       
    }
}

user4.getDetails()

// in this example the arrow funtion inherite the this of its parent function getDetails which is reffer to its parent object which is user4 so o/p is "Akash".


class userClass {
    constructor(n){
      this.name = n
    }


    getName(){
        console.log(this.name,"class");
        
    }
}

let UserClass = new userClass("Anirban")

UserClass.getName()


// inside of a class "this" will ponits to all the veriables inside the constructor


// Question 1 : what is the o/p??

let Users = {
    name:"Anirban",
    getDetails (){
        const name = 'Anirban paul';

        return this.name
      
    }
}

console.log(Users.getDetails()); // o/p "Anirban" , not "Anirban paul", cause in this perticular example of code "this" is pointing to its parent object .


//Question 2 : what is the result of accessing its ref ? why?? 
function makeUser () {
    return {
        name : "Krishna",
        ref:this
    }
}

let User = makeUser()

console.log(User.ref.name,"ref Q2.");
// the trick is in how the function was called , it is returning an object , but it is call in a vareable User so the parent object is window object and it does not have any this called name in it so o/p is undefined.


// so fix that so it called to name 


function makeUser1(){
    return {
        name : 'john',
        ref(){
            return this;
        }
    }
}

let fix = makeUser1()

console.log(fix.ref().name,"fix");// o/p john.


// Question 3 : Ehat will be the o/p;


let set = {
    name : "Anshu",
    logMessage(){
        console.log(this.name);
        
    }
}

setTimeout(set.logMessage(),1000) // this will print undefined cause inside setTimeout it is taking the function as a callback function so internaly the hole function is copied there , in that case "this" will ref to its parent object which is now window object , and it has no name in it  so o/p is undefined.

// to fix this so this will point to the name inside 


let set1 = {
        name : "Anshu",
    logMessage(){
        console.log(this.name);
        
    }
}
setTimeout(function () {
    set1.logMessage()
    console.log("fix of call back");
    
},1000)

