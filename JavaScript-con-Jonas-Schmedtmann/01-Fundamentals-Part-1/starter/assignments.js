console.log("*****************Assigments******************");

////////////////////////////////Assignments #1 Values and Variables

console.log("Assignments #1 Values and Variables");
//let country = "Mexico";
//let continent = "America";
let population = 126;

//console.log(country);
//console.log(continent);
console.log(population);

////////////////////////////////Assignments #2 Data Types

console.log("Assignments #2 Data Types");
//let isIsland = true;
let language;

//console.log(typeof country);
console.log(typeof language);
console.log(typeof population);
//console.log(typeof isIsland);

////////////////////////////////Assignments #3 Let, const and var

console.log("Assignments #3 Let, const and var")
language = "spanish";
const country = "Mexico";
const continent = "America";
const isIsland = false;
//isIsland = true; -> Si se coloca falla ya que la variable es una constante 

////////////////////////////////Assignments #4 Basic Operators

console.log("Assignments #4 Basic Operators");
let hafePopulation = population / 2;
console.log(population);
console.log(population++);
const Finland = 6;
console.log(population > Finland);
const averagePopulation = 33;
console.log(averagePopulation > population);
const description1 =
    country +
    " is in " +
    continent +
    ", and its " +
    population +
    " million people speak " +
    language;
console.log(description1);

////////////////////////////////Assignments #5 Strings and Template Literals

console.log("Assignments #5 Strings and Template Literals");

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

////////////////////////////////Assignments #6 Taking Decisions: if / else Statements

console.log("Assignments #6 Taking Decisions: if / else Statements");
population = 11

if(population >= 33){
    console.log(`${country}'s population is above average`);
} else if(population <= 22){
    console.log(`${country}'s population is ${33 - population} millions below average`);
}

////////////////////////////////Assignments #7 Type Conversion and Coercion

console.log("Assignments #7 Type Conversion and Coercion");

console.log("9" - "5", 4); //4
console.log("19" - "13" + "17", "617"); //"617"
console.log("19" - "13" + 17, 23); //23
console.log("123" < 57, false); // false
console.log(5 + 6 + "4" + 9 - 4 - 2, 1143); // 1143

////////////////////////////////Assignments #8 Equality Operators: == vs. ===

console.log("Assignments #8 Equality Operators: == vs. ===");

/*
let numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if(numNeighbours === 1) {
    console.log("Only 1 border");
} else if (numNeighbours > 1){
    console.log("More than 1 border");
} else {
    console.log("No borders")
}
*/

////////////////////////////////Assignments #9 Logical Operators

console.log("Assignments #9 Logical Operators");

console.log(population);
console.log(country);
console.log(language);

let island = false; 

if(language === "English" && population < 50 && !island){
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}


////////////////////////////////Assignments #10 The switch statement

console.log("Assignments #10 The switch statement");

switch(language){
    case "chinese":
    case "mandarin":
        console.log("MOST number of native speakers!");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "english": 
        console.log("3rd place");
        break;
    case "hindi": 
        console.log("Number 4");
        break;
    case "arabic": 
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
}

////////////////////////////////Assignments #11 The conditional (Ternary) Operator

console.log("Assignments #11 The conditional (Ternary) Operator");

console.log(`${country}'s population is ${population > 33 ? "above average" : "below average"}`)