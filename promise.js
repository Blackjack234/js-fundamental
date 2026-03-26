//Promise in javascript

//Synchronous and Asynchronous Code.

//sync

// console.log("Start");
// console.log("Anirban");
// console.log("Finish");

// in here our code is executed line by line and this is a synchronous code.

// Async code

// console.log("start");

// function importentAction(username){
//  setTimeout(()=>{
//     return `UserName is ${username}`
//  },1000)
// }

// const message = importentAction("Anirban")

// console.log(message);

// console.log("finish");

// message will print undefined cause js will finish all the sync code that is logs only and then it will call the function .at the time the message is undefined.

// promise

function importantFunction(userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Username is ${userName}`);
    }, 1000);
  });
}

function jobFunction(job) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`job on ${job}`);
    }, 500);
  });
}

function techFunction(tech) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`on tech ${tech}`);
    }, 700);
  });
}

// Promise chaining
// importantFunction("Anirban").then((res)=>{
//     console.log(res);
//     return jobFunction("js")

// }).then((res)=>{
//    console.log(res);
//    return techFunction("Nest js")

// }).then((res)=>{
//  console.log(res);
// }).catch((err)=>{
//     console.log(err);

// })

// 1st promise is returning a another promise and so on so forth and we are chaining all together with multiple .then this is called promise chaining.

//Promise combinator

// it helps us execute more than one promise at a time and return the result accordingly.

// there are 4 types of promise combinator

// Promise.all()

//it takes an array of promises and run all the promises in parallel and return the result accordingly, but if one of those promise failed the entire proces will fail.

// example

// Promise.all([
// importantFunction("Anirban"),
// jobFunction("js"),
// techFunction("Nestjs")
// ]).then((res)=>{
//   console.log(res,"all");

// }).catch((err)=>{
// console.log(err);

// })

// Promise.race()

//it takes the array of promises, Creates a Promise that is resolved or rejected when any of the provided Promises are resolved or rejected.

// Promise.race([
//   importantFunction("Anirban"),
//   jobFunction("js"),
//   techFunction("Nestjs"),
// ])
//   .then((res) => {
//     console.log(res,"race");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   Promise.allSettled()

//Creates a Promise that is resolved with an array of results when all of the provided Promises resolve or reject.

//@param values — An array of Promises.

// Promise.allSettled([
//   importantFunction("Anirban"),
//   jobFunction("js"),
//   techFunction("Nestjs"),
// ])
//   .then((res) => {
//     console.log(res, "allsettled");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//   Promise.any()

/*
The any function returns a promise that is fulfilled by the first given promise to be fulfilled, or rejected with an AggregateError containing an array of rejection reasons if all of the given promises are rejected. It resolves all elements of the passed iterable to promises as it runs this algorithm.

@param values — An array or iterable of Promises.

*/

// Promise.any([
//   importantFunction("Anirban"),
//   jobFunction("js"),
//   techFunction("Nestjs"),
// ])
//   .then((res) => {
//     console.log(res, "any");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const result = async () => {
//   try {
//     const message1 = await importantFunction("Anirban");
//     const message2 = await jobFunction("js");
//     const message3 = await techFunction("nest js");

//     console.log({ message1, message2, message3 });
//   } catch (error) {
//     console.log("Error message", error);
//   }
// };

// result();

//output based question

//what is te output

//output :- start,1,end,2

// console.log("start");

// const promise1 = new Promise((resolve,reject)=>{
// console.log("1");
// resolve("2")
// })

// promise1.then((res)=>{
//   console.log(res);

// });

// console.log("end");

//what's the output
//output : start,1,3,end,2

// console.log("start");

// const promise2 = new Promise((resolve,reject)=>{
//     console.log(1);

//     resolve(2)

//     console.log(3);

// })

// promise2.then((res)=>{
//  console.log(res);

// })
// console.log("end");

// what's the output

// output :- start,middle,1,end,success

// console.log("start");

// const fn = () =>
//   new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
//   });

// console.log("middle");

// fn().then((res)=>{
//     console.log(res);

// })
// console.log("end");

//what is the output

// output: - Error1,success 3
// const job = ()=>{
//     return new Promise((resolve,reject)=>{
//        reject()
//     })
// }

// const promise = job().then((res)=>{
//   console.log("success 1");

// }).then((res)=>{
//  console.log("success 2");

// }).catch((err)=>{
//   console.log("Error 1");

// }).then((res)=>{
//  console.log("success 3");

// })

// what is the output

// success,error,Error caught
// const job = (state)=>{
//  return new Promise((resolve,reject)=>{
//     if(state){
//      resolve("success")
//     }else{
//         reject("error")
//     }
//  })
// }

// const promise = job(true)

// promise.then((res)=>{
// console.log(res);

// return job(false)

// }).catch((err)=>{
//    console.log(err);

//    return "Error caught"

// }).then((res)=>{
//   console.log(res);

//   return job(true)

// }).catch((err)=>{
//   console.log(err);

// })

// output based question

// const firstPromise = new Promise((resolve,reject)=>{
//    resolve("First!")
// })

// const secondPromise = new Promise((resolve, reject) => {
//   resolve(firstPromise);
// });

// secondPromise.then((res)=>{
//  return res
// }).then((res)=>{
//   console.log(res);

// })

//solve promises Recursively

function promRecurse(funcPromise) {
  if (funcPromise.length === 0) return;

  const cutomPromise = funcPromise.shift();

  cutomPromise.then((res) => console.log(res)).catch((err) => console.error(err));

  promRecurse(funcPromise)
}

promRecurse([
  importantFunction("anirban"),
  jobFunction("js"),
  techFunction("nestjs"),
]);
