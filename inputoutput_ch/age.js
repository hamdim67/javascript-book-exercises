//Modify age.js from Variable chapter to use readline-sync

//let age = 20;
// console.log(`You are ${age} years old.`);
// console.log(`In 10 years, you will be ${age + 10} years old.`);
// console.log(`In 20 years, you will be ${age + 20} years old.`);
// console.log(`In 30 years, you will be ${age + 30} years old.`);
// console.log(`In 40 years, you will be ${age + 40} years old.`);

//Modified
//How readline-sync owrks
//1. require function imports 'readline-sync' into your program 
//2. It returns the library as an object, which we assign to 'rlSync' variable
//3. Then we use 'rlSync' to call the 'question' method; this method displays string method, 
//and waits for user to respond
//Then when user responds and types text, we store that text in a variable and display it

let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you? '));
console.log(`You are ${age} years old`);
console.log(`In 10 years, you will be ${age + 10} years old`);
console.log(`In 20 years, you will be ${age + 20} years old`)
console.log(`In 30 years, you will be ${age + 30} years old`)
console.log(`In 40 years, you will be ${age + 40} years old`)

