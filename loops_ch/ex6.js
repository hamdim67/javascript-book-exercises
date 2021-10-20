//Reimplement the factorial function from Ex 2 using recuirsion. Once again, 
//you may assume that the integer is positive

// function factorial(number) {
//     let fact = 1;
//     for (let i = number; i > 0; i -= 1) {
//          fact *= i;
//     };
//     return number;
// };


//Solution workthrough

function factorial(number) {
    //If number is 0 or less, return it
    if (number === 1) {
        return 1;
    }
    //Otherwise, we want to return factorial recursively
    //So, we want factorial to call ITSELF again
    //in the return statement to do that
   return number * factorial(number - 1); 
};

console.log(factorial(6));
console.log(factorial(4));
