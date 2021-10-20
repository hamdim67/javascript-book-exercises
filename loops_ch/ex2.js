//Write a function that computes and returns the 
//factorial of a number by using a for loop. 
//The factorial of a positive integer n, 
//signified by n!, is defined as the product of 
//all integers between 1 and n, inclusive:

//Assume argument is always positive integer


//Examples
// 1! = 1
// 2! = 1 * 2 = 2
// 3! = 1 * 2 * 3 = 6
// 4! = 1 * 2 * 3 * 4 = 24
// 5! = 1 * 2 * 3 * 4 * 5 = 120

// n! = n * (n - 1) * (n - 2) * (n - 3)

// function factorial(n) {
//     return n * (n - 1) * (n - 2) * (n - 3)
// };

//we want it to START at number and go BACKWARDS And at > 0 (so 1)
        //so, fact will be number * (number - 1) * (number - 2)...etc
        //so, fact increments DOWN (i = i - 1)

function factorial(number) {
    let fact = 1;
    for (let i = number; i > 0; i -= 1) {
         fact *= i;
    };
    return number;
};

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));