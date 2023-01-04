'use strict';

console.log("********************Script********************");

//////////////////class # 32 Activating Strict Mode

console.log("Script #1 Activating Strict Mode");

//"use strict" <- siempre se coloca en la primera linea de codigo

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; //-> si la variable se escribe incorrectamente 
if (hasDriversLicense) console.log("I can drive :D");

//const interface = "Audio"; -> son variables pero no estan disponibles por posibles cambios en el futuro 
//const private = 534; -> son variables pero no estan disponibles por posibles cambios en el futuro

//////////////////class # 33 Functions

console.log("Script #2 Functions");

/*
function logger() {
    console.log('My name is Jonas');
}

//calling / running / invoking  function 
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
*/

//////////////////class # 34 Functions Declarations vs. Expressions 

console.log("Script #3 Functions Declarations vs. Expressions");

/*
//Function declaration
function calcAge1(birthYear){
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
consle.log(age1);

//funtion expression
const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);

console.log(age1, age2);
*/

//////////////////class # 35 Arrow Functions

console.log("Script #4 Arrow Functions");

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `$}${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

//////////////////class # 36 Functions Calling Other Functions

console.log("Script #5 Functions Calling Other Functions");

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

//////////////////class # 37 Functions Calling Other Functions

console.log("Script #6 Functions Calling Other Functions");
/*
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
  }
  
  const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;
  
    if (retirement > 0) {
      console.log(`${firstName} retires in ${retirement} years`);
      return retirement;
    } else {
      console.log(`${firstName} has already retired 🎉`);
      return -1;
    }
  }
  
  console.log(yearsUntilRetirement(1991, 'Jonas'));
  console.log(yearsUntilRetirement(1950, 'Mike'));
*/

//////////////////Class # 38 Coding Challenge #1

console.log("Script #7 Coding Challenge #1");

let average = (s1, s2, s3) => (s1 + s2 + s3) / 3;

    let scoreDolphins = average(44, 23, 71);
    let scoreKoalas = average(65, 54, 49);
    console.log(scoreDolphins, scoreKoalas);

    function checkWinner(aD1, aD2, aD3, aK1, aK2, aK3) {
        let avgDolhins = average(aD1, aD2, aD3);
        let avgKoalas = average(aK1, aK2, aK3);

        if(avgDolhins >= 2 * avgKoalas) {
        console.log("Dolhins wins");
        } else if(avgKoalas >= 2 * avgDolhins){
        console.log("Koalas wins");
        } else {
        console.log("No winner");
        }
    }

checkWinner(44, 23, 71, 65, 54, 49);
checkWinner(85, 54, 41, 23, 34, 27);

//////////////////Class # 39 Introduction to Arrays

console.log("Script #8 Introduction to Arrays");
/*
//Crear y consultar arrays
let friends = ['Michael', 'Stevem', 'Peter'];
console.log(friends);
let years = new Array(1991, 1984, 2008, 2020);
console.log(years);
//consultar info dentro del array
console.log(friends[0]);
console.log(friends[2]);
//consultar longitud
console.log(friends.length);
//consultar el ultimo
console.log(friends[friends.length - 1]);
//Remplazar
friends[2] = 'Jay';
console.log(friends);
//Me
let Alex = ['Alex', 'Aguirre', 2022 - 2002, 'Student', friends];
console.log(Alex);

const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}

let años = [1990, 1967, 2002, 2010, 2018];

let age1 = calcAge(años[0]);
let age2 = calcAge(años[1]);
let age4 = calcAge(años.length - 1);

console.log(age1, age2, age4);

let ages = [calcAge(años[0]), calcAge(años[1]), calcAge(años.length - 1)];
console.log(ages);
*/
//////////////////Class # 40 Basic array operators (Methods)

console.log("Script #9 Basic array operators (Methods)");

let friends = ['Michael', 'Steven', 'Peter'];
//Add elements to the array
let newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);
//eliminate the last element
friends.pop();
let popped = friends.pop();
console.log(popped);
console.log(friends);
//eliminate the first element
friends.shift();
console.log(friends);
//Buscar elemento y posicion
console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));
//Buscar elemento
friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}

//////////////////Class # 41 Coding Challenge #2

console.log("Script #10 Coding Challenge #2");

let calcTip = function (bill){
    let tip = 0;

    if(bill >= 50 && bill <= 300){
        tip = (bill * 15) / 100;
        tips.push(tip);
        total.push(tip + bill);
    } else {
        tip = (bill * 20) / 100;
        tips.push(tip);
        total.push(tip + bill);
    }

    return tip;
}

let bills = [125, 555, 44];
let tips = [];
let total = [];

calcTip(bills[0]);
console.log(tips, total);
calcTip(bills[1]);
console.log(tips, total);
calcTip(bills[2]);
console.log(tips, total);

//////////////////Class # 42 Introduction to objects

console.log("Script #11 Introduction to objects");
/*
let jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
  };
*/
//////////////////Class # 43 Dot vs. Bracket Notation

console.log("Script #12 Dot vs. Bracket Notation");
/*
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

let nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey)

let interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/
//////////////////Class # 44 Object Methods

console.log("Script #13 Object Methods");

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());

//////////////////Class # 45 Coding Challenge #3

console.log("Script #14 Coding Challenge #3");

const mark = {

  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
}

console.log(mark.calcBMI());

const john = {

  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height ** 2);
    return this.bmi;
  }
}

console.log(john.calcBMI());

if(mark.calcBMI() > john.calcBMI()){
  console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})!`);
} else if (mark.calcBMI() < john.calcBMI()){
  console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})!`);
}

//////////////////Class # 46 Iteration: The for Loop

console.log("Script #15 Iteration: The for Loop");

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

//⬆===⬇//

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

//////////////////Class # 47 Looping Arrays, Breaking and Continuing

console.log("Script #16 Looping Arrays, Breaking and Continuing");
/* 
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break

console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;

  console.log(jonas[i], typeof jonas[i]);
}
*/
//////////////////Class # 48 Looping Backwards and Loops in Loops

console.log("Script #17 Looping Backwards and Loops in Loops");
/*
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
*/
//////////////////Class # 49 The while Loop

console.log("Script #18 The while Loop");
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
*/
//////////////////Class # 50 Coding Challenge #4

console.log("Script #19 Coding Challenge #4");

/*

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/
let bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips2 = [];
let total2 = [];

let calcTip2 = function (){
  let tip2 = 0;
  
  for (let i = 0; i < bills2.length; i++) {
    if(bills2[i] >= 50 && bills2[i] <= 300){
        tip2 = (bills2[i] * 15) / 100;
        tips2.push(tip2);
        total2.push(tip2 + bills2[i]);
    } else {
        tip2 = (bills2[i] * 20) / 100;
        tips2.push(tip2);
        total2.push(tip2 + bills2[i]);
    }
  }

  console.log(tips2);
  console.log(total2);

}
calcTip2();

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);
*/

/*
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/

let calcAverage = function (arr) {
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  
  return sum / arr.length;
}

console.log(calcAverage(total2));