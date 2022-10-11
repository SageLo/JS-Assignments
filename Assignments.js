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
//Code Challenge 2, use information above to create if/else statments, then use Template literal to log the output of the statments.

if (bmiMark > bmiJohn) {
    console.log(`Marks BMI (${bmiMark}) is Higher than Johns (${bmiJohn})`)
} else {
    console.log(`Johns BMI (${bmiJohn}) is Higher then Marks (${bmiMark})`)
}
*/

// Code Challenge 3, 
/*
let dolphinAverage = (89 + 96 + 108) / 3
console.log(dolphinAverage) //97 ave

let koalasAverage = (88 + 91 + 110) / 3
console.log(koalasAverage) //96 ave

if (dolphinAverage > koalasAverage) {
    console.log('dolphins win')
} else if (dolphinAverage === koalasAverage) {
    console.log('draw')
} else {
    console.log('Koalas win')
}
*/

let dolphinAverage = (97 + 108 + 101) / 3
let koalasAverage = (109 + 95 + 106) / 3

if (dolphinAverage > 100 || koalasAverage > 100) {
    if (dolphinAverage > koalasAverage) {
        console.log('Dolphins win');
    } else if (dolphinAverage === koalasAverage) {
        console.log('Draw');
    } else {
        console.log('Koalas win');
    }
} else {
    console.log('No team has higher 100 points')
}

