let count = 0;
const b1 = document.querySelector(".btn-1");
const b2 = document.querySelector(".btn-2");
const b3 = document.querySelector(".btn-3");
const btns = document.querySelectorAll(".btn");
let num = document.querySelector(".num");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.currentTarget);
    console.log(e.currentTarget.classList);
    const styles = e.currentTarget.classList;
    if (styles.contains("btn-1")) {
      count--;
    } else if (styles.contains("btn-3")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      num.style.color = "rgb(12, 225, 12)";
    }
    if (count < 0) {
      num.style.color = "red";
    }
    if (count === 0) {
      num.style.color = "#222";
    }
    num.textContent = count;
  });
});
