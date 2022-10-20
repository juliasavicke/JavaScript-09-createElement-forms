"use strict";
console.log("uzd.js");

{
  /* <section>
  <h2 id="yes">Section title</h2>
  <p class="text">Hello i am section text</p>
</section> */
}
{
  /* <article>
  <h3 class="title_a">JS</h3>
  <p class="date">2022 02 15</p>
  <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, vel?</p>
</article> */
}

// sukurti funkcija kuri sukuria [1-2] punkto struktura ir priima selektoriaus argumenta kur ikelti. pvz

// createSection('#app') - sukurs struktura ir ikels i elementa su id 'app'
// createArticle('.aside') - sukurs struktura ir ikels i elementa su klase 'aside'

function createSection(destination = document.body) {
  const sectionEl = createEl("section", destination);
  const h2El = createEl("h2", sectionEl);
  h2El.id = "yes";
  const text = "Hello i am section text";
  const pEl = createEl("p", sectionEl, text, "text");

  return sectionEl;
}
function createArticle(destination = document.body) {
  const articleEl = createEl("article", destination);
  const h2El = createEl("h2", articleEl, "new title", "title_a");
  const p1El = createEl("p", articleEl, "2022-02-15", "date");
  const p2ElCont =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique, vel?";
  const p2El = createEl("p", articleEl, p2ElCont, "text");
  console.log("h2El ===", h2El);
}

function createEl(tagName, destination, elText = null, className = null) {
  const el = document.createElement(tagName);
  el.textContent = elText;
  if (className !== null) el.className = className;

  destination.append(el);
  console.log("el ===", el);
  return el;
}

//let sukurtasEl = createEl("p", createSection(), "hello");
//document.body.prepend(sukurtasEl);

function makeList() {
  const olEl = createEl("ol", createSection(), null, "colors");
  const listItems = ["red", "green", "blue"];
  for (let item of listItems) {
    createEl("li", olEl, item);
  }
}
//makeList();

createSection();
createArticle();
