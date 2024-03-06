// Test for equality and inequality with strings

const string1: string = `Hello`;
const string2: string = `world`;
console.log(string1 === string2); //false
console.log(string1 !== string2); //True

// Tests using the lower case functioin
const lowercaseString: string = `hello`;
console.log(lowercaseString.toLowerCase() === `hello`); //true
console.log(lowercaseString.toLowerCase() === `HELLO`); //False

// Numerical tests

const num1: number = 5;
const num2: number = 10;
console.log(num1===num2); //False
console.log(num1 !== num2); //True
console.log(num1 > num2); //False
console.log(num1 < num2); //True
console.log(num1 >= num2); //False
console.log(num1<=num2); //True

// Tests using "and" and "or" operators

const condition1: boolean = true;
const condition2: boolean = false;
console.log(condition1 && condition2); //False (AND)
console.log(condition1 || condition2); //True (OR)

// Tests whether an item is in an array

const array1: number[] = [1, 2, 3, 4, 5];
const itemToFind: number = 3;
console.log(array1.includes(itemToFind)); //True

// Tests whether an item is not in an array

const itemToNotFind: number = 6;
console.log(!array1.includes(itemToNotFind)); //True


