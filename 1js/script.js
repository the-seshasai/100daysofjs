"use strict";
const a = "**";
const b = 5;
const c = 2;
// operator(a, b, c);

// function operator(a, b, c) {
//   if (a === "+") {
//     console.log(`the sum is ${b + b}`);
//   } else if (a === "-") {
//     console.log(`the difference is ${b - b}`);
//   } else if (a === "/") {
//     console.log(`${b / c}`);
//   } else if (a === "*") {
//     console.log(`${b * b}`);
//   } else if (a === "%") {
//     console.log(`${b % c}`);
//   } else if (a === "**") {
//     console.log(`${b ** c}`);
//   }
// }
// let operator = (a, b, c) => {
//   if (a === "+") {
//     console.log(`the sum is ${b + b}`);
//   } else if (a === "-") {
//     console.log(`the difference is ${b - b}`);
//   } else if (a === "/") {
//     console.log(`${b / c}`);
//   } else if (a === "*") {
//     console.log(`${b * b}`);
//   } else if (a === "%") {
//     console.log(`${b % c}`);
//   } else if (a === "**") {
//     console.log(`${b ** c}`);
//   }
// };
let operator = function (a, b, c) {
  if (a === "+") {
    console.log(`the sum is ${b + b}`);
  } else if (a === "-") {
    console.log(`the difference is ${b - b}`);
  } else if (a === "/") {
    console.log(`${b / c}`);
  } else if (a === "*") {
    console.log(`${b * b}`);
  } else if (a === "%") {
    console.log(`${b % c}`);
  } else if (a === "**") {
    console.log(`${b ** c}`);
  }
};
operator(a, b, c);
