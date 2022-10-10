/*
let country = "America";
let continent = 'North America';
let population = '500,000,000';

console.log(country);
console.log(continent);
console.log(population);


// simple var and value
let isIsland = false; //boolean val
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

/*
//Code Challenge Primitive values (got very close to correct answer but the way I structed it was wrong, will redo correct bellow)
 const data1MarkWeight = 78;
 const data1MarkTall = 1.69;

 const data2MarkWeight = 95;
 const data2MarkTall = 1.88;

 const data1JohnWeight = 92;
 const data1JohnTall = 1.95;

 const data2JohnWeight = 85;
 const data2JohnTall = 1.76;

 const markBMI = 78 / (1.69 * 1.88); // BMI tots 24.54
 console.log(markBMI)
 const markBMI2 = 95 / (1.69 * 1.88); // BMI tots 29.90
 console.log(markBMI2)

 const JohnBMI = 92 / (1.95 * 1.76); // BMI tots 26.80
 console.log(JohnBMI)
 const JohnBMI2 = 85 / (1.95 * 1.76); // BMI tots 24.76
 console.log(JohnBMI2)


 const markHigherBMI = markBMI2 > JohnBMI2
 console.log(markHigherBMI)
*/

// const markWeight = 78
// const markHeight = 1.69
// const johnWeight = 92
// const johnHeight = 1.95

const markWeight = 95
const markHeight = 1.88
const johnWeight = 85
const johnHeight = 1.76


const bmiMark = markWeight / markHeight ** 2
const bmiJohn = johnWeight / (johnHeight * johnHeight)
const markHighBMI = bmiMark < bmiJohn
console.log(bmiMark, bmiJohn, markHighBMI)
// because the variables are the same I just switched out the values to get the answers, although my results were simular above they
// were incorrect, I added the results from both test instead of sticking to just one test. Although the answers were roughly the same
// good lesson in building the framework for simple use. now i have tons of needless variables.

