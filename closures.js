// Lexical scope is the scope in which a function is defined, not where it is called.

function outerFunction() {
  const outerVariable = "I am from the outer function!";

  function innerFunction() {
    console.log(outerVariable); // Accessing the outer variable
  }

  innerFunction();
}

outerFunction(); // Output: I am from the outer function!

// Closures
// A closure is a function that has access to its own scope, the scope of the outer function, and the global scope. It allows a function to access variables from an enclosing scope even after it has left the scope in which it was declared.

function makeCounter() {
  let count = 0; // This variable is enclosed by the inner function

  return function () {
    count++; // The inner function has access to the 'count' variable
    console.log(count);
  };
}

const counter = makeCounter();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3

// In this example, the inner function returned by makeCounter forms a closure that retains access to the count variable, allowing it to increment and log the count each time it is called.

function mYFunction() {
  var name = "John";
  function displayName() {
    console.log(name);
  }

  return displayName;
}

const myFun = mYFunction();
myFun(); // Output: John

// In this example, the displayName function forms a closure that retains access to the name variable defined in the outer function mYFunction. When myFun is called, it can still access and log the value of name, demonstrating how closures allow inner functions to access variables from their outer scope even after the outer function has finished executing.

// interview question on closures
//question 1 : what will be logged to console when the below code is executed?

let count = 0;

(function showCount() {
  if (count === 0) {
    let count = 1; //shadowing the outer count variable
    console.log(count);
  }
  console.log(count);
})();

//question 2 : Write a function to do this ;

const addSix = createBase(6);

console.log(addSix(10)); // Output: 16 it is doing something like createBase(6)(10) which is returning 6 + 10 cause addsix is a closure that retains access to the base variable defined in createBase function. When addSix(10) is called, it adds 10 to the base value of 6 and returns the result, which is 16.
console.log(addSix(21)); // Output: 27

function createBase(base) {
  return function (num) {
    return base + num; // The inner function has access to the 'base' variable
  };
}

//question 3 : how to Time optimize code using closures

// Closures can be used to optimize code by allowing you to create private variables and functions that are not accessible from the global scope. This can help reduce the number of global variables and improve performance by avoiding unnecessary computations.

function find() {
  let a = [];

  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  return function (index) {
    console.log(a[index]);
  };
  
}

const closure = find()
console.time("6");
closure(6);
console.timeEnd("6");

console.time("12");
closure(12);
console.timeEnd("12");

// In this example, the find function creates a large array of squared numbers and returns an inner function that can access this array. By using a closure, we avoid having to recompute the squares every time we want to access a specific index, which can significantly improve performance when dealing with large datasets.


//question 4 : What are some common use cases for closures in JavaScript?

// Closures are commonly used in JavaScript for various purposes, including:

// 1. Data Privacy: Closures allow you to create private variables and functions that cannot be accessed from outside the enclosing function, providing a way to encapsulate data and prevent unintended access.

// 2. Function Factories: Closures can be used to create function factories, which are functions that return other functions. This is useful for creating specialized functions based on certain parameters.

// 3. Event Handlers: Closures are often used in event handlers to maintain access to variables from the outer scope, allowing you to manage state and behavior in response to user interactions.

// 4. Memoization: Closures can be used to implement memoization, which is an optimization technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again.

// 5. Module Pattern: Closures are a fundamental part of the module pattern, which allows you to create modules with private and public members, helping to organize code and manage dependencies in larger applications.   


//question 5 : Block scope and setTimeOut


// When using setTimeout in a loop, it's important to understand how closures and block scope work together. If you use var to declare the loop variable, it will be shared across all iterations of the loop, leading to unexpected behavior. However, if you use let, each iteration will have its own block scope, allowing the setTimeout callback to access the correct value of the loop variable.

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i); // This will log 5 five times, because 'i' is shared across all iterations
  }, 1000);
}

for (let j = 0; j < 5; j++) {
  setTimeout(function () {
    console.log(j); // This will log 0, 1, 2, 3, and 4, because 'j' has block scope
  }, 1000);
}

// In the first loop, using var causes the variable i to be shared across all iterations, so when the setTimeout callbacks execute after the loop has completed, they all reference the same variable i, which has a value of 5. In the second loop, using let creates a new block scope for each iteration, allowing each setTimeout callback to access the correct value of j at the time it was created. 


// function a(){

//     function b(j){
//       setTimeout(function () {
//         console.log(j); 
//       }, 1000);
//     }
//     for (var i = 0; i < 5; i++) {
//          b(i)
//     }
// }

// a()


//Question 6 : how do you use a closure to create a private counter?

function counter1 (){
    var _counter = 0; // This variable is private to the counter function

    function add (increment){
      _counter +=increment
    }

    function retrive(){
        return "Counter = " + _counter;
    }

    return {
        add,
        retrive
    }
}


const a = counter1();

a.add(5);

console.log(a.retrive())

