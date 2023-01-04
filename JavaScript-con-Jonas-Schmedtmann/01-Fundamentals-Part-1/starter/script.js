console.log("**************Scripts**************");

//////////////////class # 11 Values and Variables

console.log("Script #1 Values and Variables");

/*let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");
      console.log(40 + 8 + 23 - 10);
      console.log("Jonas");
      console.log(23);

      let firstName = "Matilda";
      console.log(firstName);

      let jonas_matilda = "JM";
      let $function = 27;

      let person = "jonas";
      let PI = 3.1415;

      let myFirstJob = "coder";
      let myCurrentJob = "Teacher"

      let job1 = "programmer";
      let job2 = "teacher";

      console.log(myFirstJob);
      */

//////////////////class # 12 Data Types

console.log("Script #2 Data Types");

/*
      let javascriptIsFun = true;
      console.log(javascriptIsFun);

      console.log(typeof true);
      console.log(typeof javascriptIsFun);
      console.log(typeof 23);
      console.log(typeof "Jonas");
      console.log(typeof true);

      javascriptIsFun = "YES!";
      console.log(typeof javascriptIsFun);

      let year;
      console.log(year);
      console.log(typeof year);

      year = 1991;
      console.log(typeof year);

      console.log(typeof null)
*/

//////////////////class # 13 Let, const and var

console.log("Script #3 Let, const and var");

/*
let age = 30;
age = 31;

const birthYear = 1991;

var job = "programmer";
job = "teacher";
*/

//////////////////class # 14 Basic Operators

console.log("Script #4 Basic Operators");

/*
      //Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
      //2 ** 3 significa potencia 

const firstName = "Jonas";
const lastName = "Schmedtman";
console.log(firstName + " " + lastName);

//Assigment operators 
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison Operators 
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now -2018);
*/

//////////////////Class # 15 Operator Precedence

/*
console.log("Script #5 Operator Precedence");

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10 
console.log(x, y);

const averageAge = ageJonas + ageSarah / 2
console.log(ageJonas, ageSarah, averageAge);
const averageAge2 = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge2);
*/ 

//////////////////Class # 16 Coding Challenge #1

console.log("Script #6 Coding Challenge #1");

/*
let weightMark1 = 78;
let tallMark1 = 1.69;

let weightJohn1 = 92;
let tallJohn1 = 1.95;

const BMIMark = weightMark1 / (tallMark1 * tallMark1);
const BMIJohn = weightJohn1 / (tallJohn1 ** 2);

console.log(BMIMark);
console.log(BMIJohn);

let markHigherBMI = (BMIMark > BMIJohn);

console.log(markHigherBMI);

let weightMark2 = 95;
let tallMark2 = 1.88;

let weightJohn2 = 85;
let tallJohn2 = 1.76;

const BMIMark2 = weightMark2 / (tallMark2 * tallMark2);
const BMIJohn2 = weightJohn2 / (tallJohn2 ** 2);

console.log(BMIMark2);
console.log(BMIJohn2);

let markHigherBMI2 = (BMIMark2 > BMIJohn2);

console.log(markHigherBMI2);
*/

//////////////////Class # 17 Strings and Template Literals

console.log("Script #7 Strings and Template Literals");

/*
const firstName = "Jonas";
const job = "Teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`
console.log(jonasNew)

console.log(`Just a regular string...`);

console.log(`String with
multiple
lines`)
*/

//////////////////Class # 18 Taking Decisions: if / else Statements

console.log("Script #8 Taking Decisions: if / else Statements");

/*

const age = 15

if(age >= 18){
      console.log(`Sarah can start driving license 🚗`);
} else {
      const yearsLeft = 18 - age;
      console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century;

if(birthYear <= 2000){
      century = 20;
} else {
      century = 21;
}

console.log(century);
*/

//////////////////Class # 19 Coding Challenge #2

console.log("Script #9 Coding Challenge #2");

/*
let weightMark1 = 78;
let tallMark1 = 1.69;

let weightJohn1 = 92;
let tallJohn1 = 1.95;

const BMIMark = weightMark1 / (tallMark1 * tallMark1);
const BMIJohn = weightJohn1 / (tallJohn1 ** 2);

if(BMIMark > BMIJohn){
      console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn}) !`);
} else if (BMIMark > BMIJohn){
      console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark}) !`);
}
*/

//////////////////Class # 20 Type conversion and coercion

console.log("Script #10 Type conversion and coercion");

/*
//Type Convercion
const imputYear = "1991";
console.log(Number(imputYear), imputYear);
console.log(Number(imputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

//Type Coercion
console.log(`I am ` + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" + "10" + 3);
console.log("23" * "2");
console.log("23" / "2");
console.log("23" > "18");

let n = "1" + 1; //11
n = n - 1 //10

2+3+4+"5"//95
*/

//////////////////Class # 21 Truthy and falsy values

console.log("Script #11 Truthy and falsy values");

//5 falsy values: 0, "", undefined, null, NaN

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;

if(money){
      console.log("Don't spend it all ;)");//true
} else {
      console.log("You should get a job!");//false
}
let height = 0;
if(height){
      console.log("YAY! Height is defined");
} else if{
      console.log("Height is UNDEFINED");
}
*/

//////////////////Class # 22 Equality Operators: == vs. ===

console.log("Script #12 Equality Operators: == vs. ===");

/*
const age = "18"; 
if(age === 18) console.log("You just became an adult :D (strict)");
if(age == 18) console.log("You just became an adult :D (loose)");
console.log(18 === 18) // true
console.log(18 === 19) // false
console.log(18 === "18") // false ya que el triple igual no distingue entre tipos de valores
console.log(18 == 18); // true
console.log(18 == "18"); // true ya que el doble igual si destingue entre tipos ed valores

const favourite = Number(prompt("What's your favorite number?"));
console.log(favourite);
console.log(typeof favourite);

if(favourite == 23){
      console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7){
      console.log("Cool! 7 is also a awesome number!");
} else {
      console.log("Number is not 23 or 7");
}

if(favourite !== 23) console.log("Why not 23?");
*/

//////////////////Class # 24 Logic Operators
 
console.log("Script #13 Logic Operators");

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

/*
if(hasDriversLicense && hasGoodVision){
      console.log("Sarah is able to drive!");
} else {
      console.log("Someone else should drive...");
}
*/
/*
const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired){
      console.log("Sarah is able to drive!");
} else {
      cosnole.log("Someone else should drive...");
}
*/

//////////////////Class # 25 Coding Challenge #3

console.log("Script #14 Coding Challenge #3");

/*
const dolphins1 = 96;
const dolphins2 = 108;
const dolphins3 = 89;
const koalas1 = 88;
const koalas2 = 91;
const koalas3 = 110;

if(dolphins1 > koalas1){
      console.log("The Dolphins won the first Competition!!!");
} else if(dolphins1 < koalas1){
      console.log("The Koalas won the first Competition!!!");
} else if(dolphins1 === koalas1){
      console.log("We have a draw!!!");
}

if(dolphins2 > koalas2){
      console.log("The Dolphins won the second Competition!!!");
} else if(dolphins2 < koalas2){
      console.log("The Koalas won the second Competition!!!");
} else if(dolphins2 === koalas2){
      console.log("We have a draw!!!");
}

if(dolphins3 > koalas3){
      console.log("The Dolphins won the third Competition!!!");
} else if(dolphins3 < koalas3){
      console.log("The Koalas won the third Competition!!!");
} else if(dolphins3 === koalas3){
      console.log("We have a draw!!!");
}

const finalDol = (dolphins3 + dolphins2 + dolphins1) / 3
const finalKoa = (koalas3 + koalas2 + koalas1) / 3

if (finalDol > finalKoa){
      console.log("The Dolphins won the trophy!!!");
} else if(finalDol < finalKoa){
      console.log("The Koalas won the trophy!!!");
} else if(finalDol === finalKoa){
      console.log("I can't belive it we have a draw for the trophy!!!")
}

const bon1Dolphins1 = 97;
const bon1Dolphins2 = 112;
const bon1Dolphins3 = 101;
const bon1Koalas1 = 109;
const bon1Koalas2 = 95;
const bon1Koalas3 = 123;

if(bon1Dolphins1 > bon1Koalas1 && bon1Dolphins1 > 100){
      console.log("The Dolphins won the first Competition B1!!!");
} else if(bon1Dolphins1 < bon1Koalas1 && bon1Koalas1 > 100){
      console.log("The Koalas won the first Competition B1!!!");
} else if(bon1Dolphins1 === bon1Koalas1 && bon1Koalas1 > 100){
      console.log("We have a draw in B1!!!");
} 

if(bon1Dolphins2 > bon1Koalas2 && bon1Dolphins2 > 100){
      console.log("The Dolphins won the second Competition B1!!!");
} else if(bon1Dolphins2 < bon1Koalas2 && bon1Koalas2 > 100){
      console.log("The Koalas won the second Competition B1!!!");
} else if(bon1Dolphins2 === bon1Koalas2 && bon1Koalas2 > 100){
      console.log("We have a draw in B1!!!");
} 

if(bon1Dolphins3 > bon1Koalas3 && bon1Dolphins3 > 100){
      console.log("The Dolphins won the third Competition B1!!!");
} else if(bon1Dolphins3 < bon1Koalas3 && bon1Koalas3 > 100){
      console.log("The Koalas won the third Competition B1!!!");
} else if(bon1Dolphins3 === bon1Koalas3 && bon1Koalas3 > 100){
      console.log("We have a draw in B1!!!");
} 

const bon1FinalDol = (bon1Dolphins3 + bon1Dolphins2 + bon1Dolphins1) / 3
const bon1FinalKoa = (bon1Koalas3 + bon1Koalas2 + bon1Koalas1) / 3

if (bon1FinalDol > bon1FinalKoa && bon1FinalDol > 100){
      console.log("The Dolphins won the trophy of B1!!!");
} else if(bon1FinalDol < bon1FinalKoa && bon1FinalKoa > 100){
      console.log("The Koalas won the trophy of B1!!!");
} else if(bon1FinalDol === bon1FinalKoa && bon1FinalKoa > 100){
      console.log("I can't belive it we have a draw for the trophy in B1!!!")
}

const bon2Dolphins1 = 97;
const bon2Dolphins2 = 112;
const bon2Dolphins3 = 101;
const bon2Koalas1 = 109;
const bon2Koalas2 = 95;
const bon2Koalas3 = 106;

const bon2FinalDol = (bon2Dolphins3 + bon2Dolphins2 + bon2Dolphins1) / 3
const bon2FinalKoa = (bon2Koalas3 + bon2Koalas2 + bon2Koalas1) / 3

if(bon2Dolphins1 > bon2Koalas1 && bon2Dolphins1 > 100){
      console.log("The Dolphins won the first Competition B2!!!");
} else if(bon2Dolphins1 < bon2Koalas1 && bon2Koalas1 > 100){
      console.log("The Koalas won the first Competition B2!!!");
} else if(bon2Dolphins1 === bon2Koalas1 && bon2Koalas1 > 100){
      console.log("We have a draw in B2!!!");
} 

if(bon2Dolphins2 > bon2Koalas2 && bon2Dolphins2 > 100){
      console.log("The Dolphins won the second Competition B2!!!");
} else if(bon2Dolphins2 < bon2Koalas2 && bon2Koalas2 > 100){
      console.log("The Koalas won the second Competition B2!!!");
} else if(bon2Dolphins2 === bon2Koalas2 && bon2Koalas2 > 100){
      console.log("We have a draw in B2!!!");
} 

if(bon2Dolphins3 > bon2Koalas3 && bon2Dolphins3 > 100){
      console.log("The Dolphins won the third Competition B2!!!");
} else if(bon2Dolphins3 < bon2Koalas3 && bon2Koalas3 > 100){
      console.log("The Koalas won the third Competition B2!!!");
} else if(bon2Dolphins3 === bon2Koalas3 && bon2Koalas3 > 100){
      console.log("We have a draw in B2!!!");
} 

if (bon2FinalDol > bon2FinalKoa && bon2FinalDol > 100){
      console.log("The Dolphins won the trophy of B2!!!");
} else if(bon2FinalDol < bon2FinalKoa && bon2FinalKoa > 100){
      console.log("The Koalas won the trophy of B2!!!");
} else if (bon2FinalDol === bon2FinalKoa && bon2FinalDol > 100){
      console.log("The Dolphins won the trophy of B2!!!");
} 
*/

//////////////////Class # 26 The switch statement
 
console.log("Script #15 The switch statement");

/*
const day = "monday";

switch (day) {
      case "monday": //day === "monday"
            console.log("Plan course structure");
            console.log("Go to coding meetup");
            break;
      case "tuesday": //day === "tuesday"
            console.log("Prepare theory videos");
            break;
      case "wednesday": //day === "wednesday"
      case "thursday": //day === "thursday"
            console.log("Write code examples");
            break;
      case "friday": //day === "friday"
            console.log("Record videos");
            break;
      case "saturday": //day === "saturday"
      case "sunday": //day === "sunday"
            console.log("Enjoy the weekend :D");
            break;
      default: 
            console.log("Not a valid day!");
}

if(day === "monday"){
      console.log("Plan course structure");
      console.log("Go to coding meetup");
} else if (day === "tuesday"){
      console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday"){
      console.log("Write code examples");
} else if(day === "friday"){
      console.log("Record videos");
} else if(day === "saturday" || day === "sunday"){
      console.log("Enjoy the weekend :D");
} else {
      console.log("Not a valid day!");
}
*/

//////////////////Class # 27 Statement and Expressions
 
console.log("Script #16 Sentences and Expressions");

/*
//expression
3 + 4
1991
true && false && !false
const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`);

//statement
if (23 > 10){
      const str = "23 is bigger"; //string is an expression
}
*/

//////////////////Class # 28 The Conditional (Ternary) Operator
 
console.log("Script #17 The Conditional (Ternary) Operator");

const age = 23;
age >= 18 ? console.log("I like to drink wine 🍷") : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

//////////////////Class # 29 Coding Challenge #4

console.log("Script #15 Coding Challenge #4");

let bill = 430;
let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2

console.log(`The bill was $${bill}, the tip is $${tip}, and the total value is $${tip + bill}`);