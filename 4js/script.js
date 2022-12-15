"use strict";
const person = {
  firstname: "Seshasai",
  lastname: "Balaji",
  RollNo: "21MIA1005",
  get fullName() {
    return this.firstname + " " + this.lastname;
  },
};
person.dob = "2004-01-29";
// for (let i in person) {
//   console.log(person[i]);
// }
//new property added
delete person.dob;
// for (let i in person) {
//   console.log(person[i]);
// }
//property deleted
const person1 = {
  firstname: "Ashwin",
  lastname: "Balaji",
  cars: {
    car1: "Hundai",
    car2: "Ford",
    car3: "Toyota",
  },
};
// for (let i in person1.cars) {
//   console.log(person1.cars[i]);
// }
const person2 = {
  firstname: "Ashwin",
  lastname: "Balaji",
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
// for (let i in person2.cars) {
//   console.log(`${person2.cars[i].name}:`);
//   for (let j in person2.cars[i].models) {
//     console.log(`${person2.cars[i].models[j]}`);
//   }
// }
//set
const person3 = {
  firstname: "Ashwin",
  lastname: "Balaji",
  mobile: "vivo",
  set mob(mob) {
    this.mobile = mob;
  },
};
person3.mob = "iphone"; //setter name should be diff from object property
// console.log(person3.mobile);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//constructor function=>object
function person5(first, last, RollNo) {
  this.firstname = first;
  this.lastname = last;
  this.RollNo = RollNo;
  this.fullName = function () {
    return this.firstname + " " + this.lastname;
  };
}
person5.prototype.nationality = "Indian"; //same can be done for function
const myFather = new person5("Balaji", "pasupulati", "21MIA1006");
const myMother = new person5("Anitha", "Balaji", "21MIA1007");
// console.log(myFather.RollNo);
person5.fullName = "Balaji Pasupulati";
// console.log(myFather.fullName); //goes UNDIFINED
// console.log(myFather.fullName());//but gets printed here
// console.log(myFather.nationality);
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Set and map are in-built objects
const set1 = new Set();
set1.add("a");
set1.add("b");
set1.add("c");
//to access
// const Iter = set1.values();
// for (let i of Iter) {
//   console.log(i);
// }
const map1 = new Map();
map1.set("English", 90);
map1.set("Science", 95);
map1.set("Math", 97);
const Iter = map1.values();
for (let i of Iter) {
  console.log(i);
}
// const Iter1 = map1.entries();
// for (let i of Iter1) {
//   console.log(i);
// }
map1.delete("English");
const Iter1 = map1.entries();
for (let i of Iter1) {
  console.log(i);
}
map1.clear();
const Iter2 = map1.entries();
for (let i of Iter2) {
  console.log(i);
} //map is cleared
