// current age
const myAge = 26;

// this value will change
let earlyYears = 2;

earlyYears *= 10.5;

/* subtract for years already accounted for */
let laterYears = myAge - 2;

// calculate dog years
laterYears *= 4;

// calculate age in dog years
myAgeInDogYears = earlyYears + laterYears;

// return variable name in lower case
myName = 'Mak'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

console.log('early years: ' + earlyYears);
console.log('my age: ' + myAge);
console.log('later years: ' + laterYears);