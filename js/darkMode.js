"use strict";
console.log("darkMode.js");

let modeSpanEl = document.getElementById("mode");
const btnEl = document.getElementById("btn");

btnEl.addEventListener("click", () => {
  console.log("paspaudei");
  if (modeSpanEl.textContent === "dark") {
    modeSpanEl.textContent = "light";
  } else {
    modeSpanEl.textContent = "dark";
  }
});
