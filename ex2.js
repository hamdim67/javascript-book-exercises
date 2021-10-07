let number = 4936
let ones = number % 10; // (4936/10 - remainder 6)
number = (number - ones)/10  // (4936 - 6)/10 = 4930/10 = 493;
let tens = number % 10;  // 493 % 10 (returns 3 as reaminder)
number = (number - tens)/10 // (493 - 3)/10 = 49;
let hundreds = number % 10; // 49 % 10  (remainder = 9)
number = (number - hundreds)/10; // (49 - 9)/10 = 4;
let thousands = number; // 4

