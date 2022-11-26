// my Age
const myAge = 22;

// Early years
let earlyYears = 2;
earlyYears *= 10.5;

//subtract 2 from myAge
let laterYears = myAge - 2;

//multiply the laterYears
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

//add earlyYears and laterYears
const myAgeInDogYears = earlyYears + laterYears;

//name as string
const myName = 'Lim Wee Kiat'.toLowerCase();
//console.log(myName);

//string interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);