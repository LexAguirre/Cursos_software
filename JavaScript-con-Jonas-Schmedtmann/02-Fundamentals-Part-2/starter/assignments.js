"use strict";

console.log("******************Assigments******************");

////////////////////////////////Assignments #1 Functions

console.log("Assignments #1 Functions");

function describeCountry(country, population, capitalCity) {
  const text = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return text;
}

const countryDescription = describeCountry("Mexico", 11, "DF");
console.log(countryDescription);

const countryDescription2 = describeCountry("USA", 281, "Washington DC");
console.log(countryDescription2);

const countryDescription3 = describeCountry("Finland", 6, "Helsinki");
console.log(countryDescription3);

////////////////////////////////Assignments #2 Functions declaration vs. Expressions

console.log("Assignments #2 Functions declaration vs. Expressions");

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const porcentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const percPortugal1 = percentageOfWorld1(10);
const percChina1 = percentageOfWorld1(1441);
const percUSA1 = percentageOfWorld1(332);
console.log(percPortugal1, percChina1, percUSA1);

////////////////////////////////Assignments #3 Arrow Functions

console.log("Assignments #3 Arrow Functions");

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percPortugal2 = percentageOfWorld3(10);
const percChina2 = percentageOfWorld3(1441);
const percUSA2 = percentageOfWorld3(332);
console.log(percPortugal2, percChina2, percUSA2);

////////////////////////////////Assignments #4 Functions Calling Other Functions

console.log("Assignments #4 Functions Calling Other Functions");

const describePopulation = function (country, population) {
  let string = `${country} has ${population} million people, which is about ${percentageOfWorld3(
    population
  )}% of the world`;
  return string;
};

console.log(describePopulation("China", 1441));

////////////////////////////////Assignments #5 Introduccion to Arrays

console.log("Assignments #5 Introduccion to Arrays");

let population = [10, 1441, 332, 467];
let porcentage = [];

if (population.length === 4) {
  console.log(true);
} else {
  console.log(false);
}

for (let i = 0; i < population.length; i++) {
  let calc = `${percentageOfWorld3(population[i])}%`;
  porcentage.push(calc);
}
console.log(porcentage);

////////////////////////////////Assignments #6 Basic Array Operations (Methods)

console.log("Assignments #6 Basic Array Operations (Methods)");

let country = "China";

let neighbors = ["India", "Japan", "North Korea", "South Korea"];

neighbors.push("Utopia");
console.log(neighbors);
neighbors.pop("Utopia");
console.log(neighbors);

if (!neighbors.includes("Germany")) {
  console.log("Probanly not a central European country :D");
}

neighbors[neighbors.indexOf("India")] = "Republic of India";
console.log(neighbors);

////////////////////////////////Assignments #7 Introduction to Objects

console.log("Assignments #7 Introduction to Objects");

let myCountry = {
  Country: "Mexico",
  Capital: "CDMX",
  Language: "Spanish",
  Population: 126,
  neighbors: ["USA", "Guatemala", "Cuba"],

  discribe: function () {
    return `${this.Country} has ${this.Population} milion ${this.Language}-speaking people, ${this.neighbors.length} neighboring contries and a capital called ${this.Capital}`;
  },

  isIsland: function () {
    return this.neighbors.length === 0;
    //this.isIsland = this.neighbors.length === 0 ? true : false;
    //this.isIsland = !Boolean(this.neighbors.length)
  },
};

console.log(myCountry);

////////////////////////////////Assignments #8 Dot vs. Bracket Notation

console.log("Assignments #8 Dot vs. Bracket Notation");

console.log(
  `${myCountry.Country} has ${myCountry.Population} milion ${myCountry.Language}-speaking people, ${myCountry.neighbors.length} neighboring contries and a capital called ${myCountry.Capital}`
);

myCountry.population += 2;
console.log(myCountry.Population);

myCountry["Population"] -= 2;
console.log(myCountry["Population"]);

////////////////////////////////Assignments #9 Object Methods

console.log("Assignments #9 Object Methods");

console.log(myCountry.discribe());
console.log(myCountry.isIsland());

////////////////////////////////Assignments #10 Iteration: The for Loop

console.log("Assignments #10 Iteration: The for Loop");

for (let voter = 1; voter <= 5; voter++) {
  console.log(`Voter number: ${voter} is currently voting`);
}

////////////////////////////////Assignments #11 Looping Arrays, Breaking and Continuing

console.log("Assignments #11 Looping Arrays, Breaking and Continuing");

console.log(population);
let porcentage2 = [];
for (let i = 0; i < population.length; i++) {
  porcentage2.push(percentageOfWorld1(population[i]));
}
console.log(porcentage2);

////////////////////////////////Assignments #12 Looping Backwards and Loops in Loops

console.log("Assignments #12 Looping Backwards and Loops in Loops");

let listOfNeighbors = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbors.length; i++) {
  for (let j = 0; j < listOfNeighbors[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbors[i][j]}`);
  }
}

////////////////////////////////Assignments #13 The while Loop

console.log("Assignments #13 The while Loop");

console.log(population);
let porcentage3 = [];
let i = 0;
while (i < population.length) {
  porcentage3.push(percentageOfWorld1(population[i]));
  i++;
}
console.log(porcentage3);
