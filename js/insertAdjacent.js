"use strict";
console.log("insertAdjacent.js");

const listEl = document.getElementById("colorsList");

const h2ElString = "<h2>Colors</h2>";
const h2El = document.createElement("h2");
h2El.textContent = "Colors";
listEl.insertAdjacentHTML("afterbegin", "<li>Black</li>");
listEl.insertAdjacentElement("beforebegin", h2El);
