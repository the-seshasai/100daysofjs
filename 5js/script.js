"use strict";
const person1 = {
  firstname: "Seshasai",
  lastname: "Balaji",
  RollNo: "21MIA1005",
  fullName: function () {
    return this.firstname + " " + this.lastname;
  },
};
const person = {
  info: function (age, city) {
    return `${this.firstname} ${this.lastname} of age ${age} is from ${city}`;
  },
};
console.log(person.info.call(person1, 18, "Chennai"));
console.log(person.info.apply(person1, [18, "Chennai"])); //send as list in apply
console.log(person1.fullName.bind(person1));
