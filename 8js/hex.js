"use strict";

const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const back = document.querySelector(".display");
const text = document.querySelector(".color");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let colorin = "#";
  for (let i = 0; i < 6; i++) {
    let n = Math.floor(Math.random() * color.length);
    colorin += color[n];
    back.style.backgroundColor = colorin;
    text.textContent = colorin;
  }
});
