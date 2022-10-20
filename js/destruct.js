"use strict";
console.log("destruct.js");

const user = ["James", 45, "London", true];

// const username = user[0];
// const age = user[1];
// const town = user[2];
// const hasCar = user[3];
// console.log(username, age, town, hasCar);

//const [, , town] = getUser();

// console.log("username ===", username);
// console.log("age ===", age);
// console.log("town ===", town);

function getUser() {
  return ["James", 45, "London", true];
}

function getUserObj() {
  return {
    title: "Mr",
    town: "Vilnius",
    isMArried: true,
  };
}

const user2 = {
  title: "Mr",
  town: "Vilnius",
  isMArried: true,
};

console.log("getUserObj() ===", getUserObj());
console.log("user2 ===", user2);

const { town, title } = user2;
