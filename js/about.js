"use strict";
console.log("about.js");

{
  /* <div class="container">
<h1>About Us</h1>
<main>
  <article class="card">
    <h2>Its all about us</h2>
    <p>date: <strong>2022</strong></p>
    <p>It is all dynamic</p>
  </article>

  <ol class="colors">
    <li>red</li>
    <li>green</li>
    <li>blue</li>
  </ol>
</main>
</div> */
}

const containerEl = document.createElement("div");
document.body.appendChild(containerEl);

const h1El = document.createElement("h1");
h1El.textContent = "About us";

const mainEl = document.createElement("main");
containerEl.append(h1El, mainEl);

const articleEl = document.createElement("article");
articleEl.className = "card";
const olEl = document.createElement("ol");
mainEl.append(articleEl, olEl);

const h2El = document.createElement("h2");
h2El.textContent = "Its all about us";

const p1El = document.createElement("p");
const p2El = document.createElement("p");
p1El.textContent = "date: ";

const strongEl = document.createElement("strong");
strongEl.textContent = "2022";
p1El.append(strongEl);
p2El.textContent = "It is all dynamic";

articleEl.append(h2El, p1El, p2El);

const colorsArr = ["red", "green", "blue"];
const liEl = document.createElement("li");

for (let color of colorsArr) {
  console.log("liEl.textContent ===", liEl.textContent);
  olEl.insertAdjacentHTML("beforebegin", `<li>${color}</li>`);
}

const btnEl = document.createElement("button");
btnEl.textContent = "Click me";
containerEl.insertAdjacentElement("beforeend", btnEl);

//containerEl.append(btnEl);
btnEl.addEventListener("click", () => {
  let date = new Date();
  h1El.textContent = date.toLocaleTimeString("en-US", { hour12: false });
});

const imgEl = document.createElement("img");
imgEl.src = "http://placeimg.com/640/480/tech";
imgEl.alt = "tech";
imgEl.style.display = "block";

containerEl.insertAdjacentElement("beforeend", imgEl);
//containerEl.append(imgEl);
