//Earlier, we learned that Number.isNaN(value) returns true if value is the NaN value, 
//false otherwise. You can also use Object.is(value, NaN) to make the same determination.

//Without using either of those methods, write a function named isNotANumber that returns 
//true if the value passed to it as an argument is NaN, false if it is not.

//In JS, NaN is NOT equal to itself, so NaN === NaN always returns False

//So, we have to compare NaN to itself, so argument !== argument would return true 
//if the argument is NaN (since NaN is not equal to itself)
//And all the other values we pass ARE equal to themselves, so they would return false
//if they are not NaN

function isNotANumber(argument) {
    if (argument !== argument) {
        return true;
    } else {
        return false;
    }
}

console.log(isNotANumber(NaN))
console.log(isNotANumber(3))
console.log(isNotANumber('hello'))

//One line solution

function isNotANumber(argument) {
    return argument !== argument;
}