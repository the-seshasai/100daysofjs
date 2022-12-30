"use strict";

const color = ["red", "green", "blue", "rgb(0,0,0)", "rgb(255,255,255)"];
const back = document.querySelector(".display");
const text = document.querySelector(".color");
const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let n = Math.floor(Math.random() * color.length);
  back.style.backgroundColor = color[n];
  text.textContent = color[n];
});
