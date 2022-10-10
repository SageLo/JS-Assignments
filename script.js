/*
let js = 'Great';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";


console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas$matilida = 'JM';
let $function = 27;

let person = 'Jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let mySecondJob = 'teacher';

console.log(myFirstJob);


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1881;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'coder';

lastName = 'poopybutt';
console.log(lastName)


//Math Operators
const now = 2037;
const ageJonas = now - 1994;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

//const firstName = 'Jonas';
const lastName = 'Shoot';
console.log(firstName + ' ' + lastName);


//Assignment Operators
let y = 10 + 5; // 15
y += 10; // y = y + 10 = 25
y *= 4; // y = y * 4 = 100
y++; // y = y + 1
y--;
y--;
console.log(y)

//Comparision operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18); // Sarah is over the age of 18\

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037; // bellow is the order of operation which can be found on mdm web
const ageJonas = now - 1994;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let y, p;
y = p = 25 - 10 - 5 // y = 10 p = 10
console.log(y, p);

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);
*/

// Strings and Template Literals

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job + '!';
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew)
