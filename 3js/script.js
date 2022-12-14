"use strict";
const arr = [1, 2, 3, 4, 5];
arr.forEach(myFunction1);

function myFunction1(value) {
  console.log(value); //value cant be modified
  //   return value; value will not be returned in forEach
}

const arr3 = [1, 2, 3, 4, 5];
const arr4 = arr.map(myFunction2);

function myFunction2(value) {
  console.log(value * 2); //value can be modified
  return value;
}
console.log(arr4);

const arr5 = [1, 2, 3, 4, 5];
const arr6 = arr.filter(myFunction3);

function myFunction3(value) {
  //   console.log(value > 0); //it cant print values like this
  return value > 3;
}
console.log(arr6);
