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
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + 'years old ' + job + '!';
console.log(jonas)

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew)

console.log('String with \n\
multiple \n\
lines'); //old way w/out template strings

console.log(`String
multiple
lines`); //template literal way
/*

// Taking descisions if / esle statments
/*
const age = 15;
if (age >= 18) {
    console.log('Sarah can start driving license');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is to young. Wait another ${yearsLeft} years`)
}

const birthYear = 2012;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/
//Type Conversion / Type Coercion (conversion is when we manually change they type) (Coercion JS auto changes the type)
/*
//Type Conversion
const inputYear = '1991'
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Coercion
console.log('I am ' + 23 + ' years old');
console.log('I am ' + '23' + ' years old');//auto converts anything after + to a string
console.log('23' - '10' - 3);
console.log('23' * '2');

let n = '1' + 1; //result is string '11'
n = n - 1;
console.log(n); //answer is 10
*/

//Truthy and Falsy values
// 5 Falsy values: 0, '', undefined, null, NaN (falsy values = false vaules that are not false but become false when converting into a boolean)
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas"));
console.log(Boolean({}));

const money = 1;
if (money) {
    console.log("don't spend it all");
} else {
    console.log('you should get a job!');
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED')
}
*/

/*
//Equality operators === / ==
const age = '18';
if (age === 18) console.log('you just became an adult'); //Strict

if (age == 18) console.log('you just became an adult'); //Loose


const favorite = Number(prompt("what's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) { //'23' == 23  / 23 === 23
    console.log('cool! 23 is a cool number!')
} else if (favorite === 7) {
    console.log('7 is also a cool nunmber')
} else if (favorite === 9) {
    console.log('9 is also a cool nunmber')
} else {
    console.log('number is not 23 or 7 pr 9')
}

if (favorite !== 23) console.log('why not 23?');
*/


//Boolean Logic  - Logical Operators
const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision); // &&-AND Operator (True when all are true)
console.log(hasDriversLicense || hasGoodVision); // ||-OR Operator (True when one var is true)
console.log(!hasDriversLicense); // !-NOT Operator (inverts true/false values)
console.log(!hasGoodVision);

// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive')
// } else {
//     console.log('Someone else should drive')
// }

const isTired = false; // variable C
console.log(hasDriversLicense && hasGoodVision && isTired)

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive')
} else {
    console.log('Someone else should drive')
}
