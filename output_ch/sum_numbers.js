let rlSync = require('readline-sync');
let mood = rlSync.question('How was your day today?\n')

console.log(`Wow! I'm glad you're feeling ${mood} today!`);

let rlSync = require('readline-sync');
let number1 = Number(rlSync.question('Enter the first number\n'));
let number2 = Number(rlSync.question('Enter the second number\n'));
let sum = number1 + number2;