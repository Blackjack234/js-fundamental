// call ,bind, and apply in jsvascript (Explicit binding)

// what is call ??

/*
Calls the function with the specified object as the this value and the specified rest arguments as the arguments.

@param thisArg — The object to be used as the this object.

@param args — Argument values to be passed to the function.

*/


let obj = {name :'Anirban'}

function setFun(age,ags){
    console.log("Hello",this.name,"is of age",age,"for explaning",ags);
    
}

setFun(24)

setFun.call(obj,24,"call")



//what is apply  ??
/*
Calls the function with the specified object as the this value and the elements of specified array as the arguments.
*/

setFun.apply(obj,[24,"apply"])



//what is bind??

/*
For a given function, creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters.

@param thisArg — The object to be used as the this object.

*/


const bindFun = setFun.bind(obj)

bindFun(35,"bind")


// question 1: call with function inside object.

let age = 10;


let pre = {
    name : "Anirban",
    age : 28,
    getFun : function (){
        return this.age
    }
}

let pre2 = {age : 24}

console.log(pre.getFun.call(pre2));// 24


// question 2 : 

let status = "good";


setTimeout(()=>{
const status = "loving";

const data = {
    status: "Avocardo",
    getStatus(){
        return this.status;
    }
}

console.log(data.getStatus());// "Avocardo"
console.log(data.getStatus.call(this.status));//this points to the globle object it will never points to a function  "good"


},0)



// call the printAnimals in such a way so that it prints all the animals.
let animals = [
    {species : "Lion",name : "King"},
    {species : "Wheel",name : "Queen"}
]

function printAnimals(i){
    this.print = function(){
        console.log((`#${i} ${this.species}: ${this.name}`));
        
    }

    this.print()
}


for (let i = 0; i < animals.length; i++) {
    printAnimals.call(animals[i],i)
    
}

// append an array to an another array 

let array = ["a","b"]
let elements = [0,1,2,3]


// array.push(...elements)

array.push.apply(array,elements)

console.log(array);


//use apply to inhance built-in functios

//find the mi/max for this array.

let num = [3,4,2,1,7]

// let min = Math.min(...num)

let min = Math.min.apply(null,num)

//similar for max 

console.log(min);


// Bound function


function f(){
    console.log(this,"bound function");
    
}

let user = {
    g : f.bind(null)
}

user.g() // context to the f dunction is hard fix by passing the null so now this will poin to the window object.



// Bind chaining


function fu(){
    console.log(this.name);
    
}


fu = fu.bind({name : "john"}).bind({name:"Anirban"})

fu()

// once an object is bind to the object it will always bind to that object , bind chaining does not happed






