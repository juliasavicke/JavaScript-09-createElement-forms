"use strict";
console.log("input.js");

const addBtnEl = document.getElementById("add");
const newInputEl = document.getElementById("newInput");
const outEl = document.getElementById("out");
const olEl = document.getElementById("ol");

function inputToOutput() {
  const inputText = newInputEl.value;
  outEl.textContent = inputText;
}

addBtnEl.addEventListener("click", makeLiEl);
//newInputEl.addEventListener("keyup", inputToOutput);

function makeLiEl() {
  const inputText = newInputEl.value;
  const liEl = `<li>${inputText}</li>`;
  olEl.insertAdjacentHTML("beforeend", liEl);
  //olEl.innerHTML = liEl;
}
