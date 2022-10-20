"use strict";
console.log("insert.js");

const h1El = document.createElement("h1");
h1El.textContent = "I am before";
const listEl = document.getElementById("colorsList");
listEl.before(h1El);

const divEl = document.querySelector(".container");
const footerEl = document.createElement("footer");
footerEl.textContent = "I am after";

document.body.append(footerEl);
