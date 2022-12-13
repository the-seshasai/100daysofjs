"use strict";
const person = {
  firstName: "Seshasai",
  lastName: "Balaji",
  dob: "2004-01-29",
  location: "Chennai",
  get age() {
    const d = new Date(this.dob);
    const n = new Date();
    return n.getFullYear() - d.getFullYear();
  },
  get fullname() {
    return this.firstName + " " + this.lastName;
  },
};
for (let i in person) {
  console.log(`${i}:${person[i]}`);
}
const arr = ["thayu", "vikram", "vichu", "seshasai", "prahlad", "rohan"];
let j = 0;
for (let i of arr) {
  j = j + 1;
  console.log(`name${j}:${i}`);
}
// fibonacci series
const fibonacci = (n) => {
  let a = 0;
  let b = 1;
  let c;
  for (let i = 0; i < n; i++) {
    if (i >= 2) {
      c = a + b;
      console.log(c);
      a = b;
      b = c;
    } else {
      console.log(i);
    }
  }
};
let n;
n = 10; //change input as per length of series
fibonacci(n);
