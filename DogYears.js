const myAge = 24; //Create a variable and set it to my current age
var earlyYears = 2; //accounts for the first two years of a dog's life in dog years  
earlyYears *= 10.5; // sets the first 2 years of a dogs life = 21
var laterYears = myAge - 2; 
laterYears *= 4; //myAge in dog years after the first 2 years
var myAgeInDogYears = laterYears + earlyYears; // calculates your age in dog years
var myName = 'Wyatt'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
