//currying in javascript
//Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions that each take a single argument. This allows for partial application of functions, making it easier to create new functions by fixing some of the arguments.
//Example of currying in JavaScript:


function f(a){
  return function(b){
     return `${a} ${b}`
  }
}

console.log(f(5)('john'));


//============= interview question ===============//

// Question :1 why do we use currying in javascript ??
// Answer : Currying allows us to create new functions by fixing some of the arguments of an existing function. This can be useful for creating more specific functions from general ones, improving code reusability, and enabling partial application of functions. It also helps in functional programming paradigms and can lead to cleaner and more readable code.

// Question :2 how to implement currying in javascript ??
// Answer : Currying can be implemented in JavaScript by creating a function that returns another function. The inner function can access the parameters of the outer function, allowing us to fix some of the arguments and return a new function that takes the remaining arguments.


//Question : 3 sum(2)(6)(1) it should return the sum of all the numbers
//Answer : We can implement this by creating a curried function that takes one argument at a time and keeps returning a new function until we have all the arguments needed to calculate the sum. Here's an example implementation:

function sum (a){
  return function (b){
     return function (c){
          return a+b+c
     }
  }
}

console.log(sum(2)(6)(1)); // Output: 9

// In this implementation, the `sum` function takes the first argument `a` and returns a new function that takes the second argument `b`. This second function then returns another function that takes the third argument `c` and finally calculates and returns the sum of all three arguments.


/*
question:4 

evaluate("sum")(4)(2)  o/p 6
evaluate("mul")(4)(2)  o/p 8
evaluate("sub")(4)(2)  o/p 2
evaluate("div")(4)(2)  o/p 2



*/

function evaluate(a){
  return function(b){
  return function (c){
    if(a === 'sum') return b+c;
    else if(a === 'mul') return b*c;
    else if(a === 'sub') return b-c;
    else if(a === 'div') return b/c;
  }
  }

}

console.log(evaluate("mul")(6)(5));
console.log(evaluate("sub")(5)(6));


// question 5 : infinite currying :  sum(1)(2)(3).....(n)  o/p : sum of all the numbers

function sum (a){
  return function (b){
     if(b) return sum(a+b)
      return a;
  }
}


// question 6 : currying vs partial application 

//what is partial application : Partial application is a technique where a function with multiple arguments is transformed into a new function that has some of the arguments fixed. This allows us to create more specific functions from general ones by pre-filling some of the arguments. The main difference between currying and partial application is that currying transforms a function into a sequence of functions that each take a single argument, while partial application creates a new function with some arguments fixed, but it can still take multiple arguments at once.

//Example of partial application in JavaScript:

function multiply(a, b) {
  return a * b;
} 


// question 7 : write a function curry() that will convert a regular function into a curried function.(VVI question in currying)

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...nextArgs) {
        return curried(...args,...nextArgs);
      };
    }
  }; 
}

// Example usage:
function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 2)(3)); // Output: 6
console.log(curriedAdd(1)(2, 3)); // Output: 6

// In this implementation, the `curry` function takes a regular function `func` as an argument and returns a new function `curried`. The `curried` function checks if the number of arguments passed is greater than or equal to the original function's length. If it is, it calls the original function with the provided arguments. If not, it returns a new function that takes additional arguments and concatenates them with the existing arguments until the total number of arguments matches the original function's length. 





