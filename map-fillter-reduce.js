// map : it takes an array apply function to its each element and returns a new array

const nums = [1, 2, 3, 4];

const myArr = nums.map((num, i, arr) => {
  return num * 3;
});

console.log(myArr);

//filter:it is a method of an array which will apply a conditional statement  to the each element of the array  and if the condition returns true then that element will pushed into a new array , otherwise element will not be pushed into the new array..

const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const moreThen3 = nums1.filter((num) => {
  return num > 3;
});

console.log(moreThen3);

//reduce method reduce the value of an array down to the a single value.Like map and filter it also uses a call back like map and filter,
// takes 2 parameters 1. call back function 2.initial value , if the initial value was not given then it will take the 1st element of the array as initial value.
//callback function will take 4 param 1. accumulator(result of the previous computation),2.current value(current element of the array),3. index,4 the array

const num2 = [1, 2, 3, 4, 5, 6, 7];

const sum = num2.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(sum);

// polyfill of map

//Array.map((curr,i,arr)=>{})

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }

  return temp;
};

const num4 = [1, 2, 3, 4];

const polyfillMap = num4.myMap((current, i, arr) => {
  return current * 3;
});

console.log(polyfillMap);

//polyfill for filter

Array.prototype.myFilter = function (cb) {
  let temp = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }

  return temp;
};

const num5 = [1, 2, 33, 5, 7, 65];

const polyfillFilter = num5.myFilter((curr, i, arr) => {
  return curr > 12;
});

console.log(polyfillFilter);

// polyfill for reduce
//arr.reduce(()=>{},initial)

Array.prototype.myReduce = function (cb, initialvalue) {
  let accumulator = initialvalue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const num6 = [1,2,3,4]

const polyfillReduce = num6.myReduce((acc,curr,i,arr)=>{
    return acc+curr
},0)

console.log(polyfillReduce);


// difference between map and forEach???


const array = [1,2,3,4,5,6]

const mapArray = array.map((ar)=>{
   return ar*2
})


const forEachArray = array.forEach((ar)=>{
   return ar*2
})

console.log(mapArray,forEachArray);



// map filter,reduce based question 

// Question1

const students = [
  { name: "Anil", rollnumber: 20, marks: 80 },
  { name: "Sujoy", rollnumber: 30, marks: 70 },
  { name: "Susmita", rollnumber: 40, marks: 90 },
  { name: "Jack", rollnumber: 10, marks: 50 },
  { name: "Akash", rollnumber: 50, marks: 30 },
];

const names = students.map(stu => stu.name.toUpperCase())

console.log(names);


//question2
//return only the details who scores more then 60 marks

const moreMarks = students.filter((stu)=>{
    return stu.marks > 60
})

console.log(moreMarks);


//question3 calculate the sum of marks of all of the students

const totalMarks = students.reduce((acc,curr,i,arr)=>{
    return acc+curr.marks
},0)


console.log(totalMarks);

// Question : Return only student names who score more then 60

const composite = students.filter(stu => stu.marks > 60)
                          .map(stu => stu.name.toUpperCase())
console.log(JSON.stringify(composite));


//return total marks for students who scores more then 60  after  20 marks have been added to those who score less then 60

const totalMarks2 = students.map((stu)=>{
  if(stu.marks < 60){
     stu.marks += 20
  }

  return stu
}).filter(stu => stu.marks > 60).reduce((acc,curr)=>{
  return acc+curr.marks
},0)

console.log(totalMarks2);



