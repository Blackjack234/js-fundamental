//Functions

// function declaration
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!

//function expression
//(when we store a function inside a variable is called function expression.)
const greet2 = function(name) {
    console.log("Hi, " + name + "!");
};

greet2("Bob"); // Output: Hi, Bob!


// what are the first class function 
//In JavaScript, functions are first-class citizens, which means they can be treated like any other value. This allows us to assign functions to variables, pass them as arguments to other functions, and return them from functions.

//Example of first-class functions
function add(a, b) {
    return a + b;
}

// Assigning a function to a variable
const sum = add;

// Passing a function as an argument
function operate(operation, x, y) {
    return operation(x, y);
}

console.log(operate(add, 5, 3)); // Output: 8

// Returning a function from another function
function createMultiplier(multiplier) {
    return function(x) {
        return x * multiplier;
    };
} 


// what is IIFE (Immediately Invoked Function Expression)
//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that is executed immediately after it is defined. It is a common pattern used to create a new scope and avoid polluting the global namespace.

(function() {
    console.log("This is an IIFE!");
})();

//O/P based question
(function(x){
    return (function (y){
     console.log(x);
    })(2)
})(1)

//Output: 1

//Explanation: The outer function is immediately invoked with the argument 1, which assigns the value 1 to the parameter x. The inner function is then immediately invoked with the argument 2, but it does not use this argument. Instead, it accesses the variable x from the outer function's scope and logs its value, which is 1.


//Function Scope - O/P based question
for (let i = 0; i < 5; i++) {
    setTimeout(function(){
        console.log(i);
    },i*1000)
    
}
//Output: 0, 1, 2, 3, 4 (each number will be logged after a delay of i seconds)

//Explanation: The use of let in the for loop creates a new block scope for each iteration, allowing each setTimeout callback to capture the correct value of i at the time it was created. As a result, when the callbacks are executed after their respective delays, they log the values 0, 1, 2, 3, and 4 in order.


var value = 10

const fun = function (){
  console.log(value)
  var value = 20
}

fun() //Output: undefined

//Explanation: In the function fun, the variable value is declared with var, which is hoisted to the top of the function scope. However, the assignment of value to 20 happens after the console.log statement. Therefore, when console.log(value) is executed, it accesses the hoisted variable value, which is undefined at that point.