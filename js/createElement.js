"use strict";
console.log("createElement.js");

const divContainerEl = document.createElement("div");
divContainerEl.className = "container";
document.body.appendChild(divContainerEl);

const h1El = document.createElement("h1");
divContainerEl.className = "main-heading";
h1El.textContent = "Main heading";
//divContainerEl.appendChild(h1El);

const pEl = document.createElement("p");
pEl.textContent = "Hello World, I am a paragraph";
//divContainerEl.appendChild(pEl);
divContainerEl.append(h1El, pEl);

{
  /* <ul class="colorsList">
  <li>red</li>
  <li>green</li>
  <li>blue</li>
</ul>; */
}

const elArr = ["red", "green", "blue"];
const nums = ["one", "two", "three"];
function makeList(arr) {
  const ulEl = document.createElement("ul");
  ulEl.className = "colorsList";
  for (let el of arr) {
    const li1El = document.createElement("li");
    li1El.textContent = el;
    ulEl.append(li1El);
  }
  document.body.append(ulEl);
}
makeList(elArr);
makeList(nums);
