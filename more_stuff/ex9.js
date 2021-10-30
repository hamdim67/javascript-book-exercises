//This exercise has nothing to do with this chapter.Instead, it uses concepts
//you learned earlier in the book.If you can't figure out the answer, don't worry: 
//this question can stump developers with more experience than you have.
// Earlier, we learned that JavaScript has multiple versions of the numeric value zero.
//In particular, it has 0 and - 0. These numbers, while being mathematically nonsensical, are 
//distinct values in JavaScript.We won't get into why JavaScript has a 0 and -0, but it can be 
//useful in some cases.

//There are other ways to detect a -0 value. Without using Object.is, write a function 
//that will return true if the argument is -0, and false if it is 0 or any other number.

function isNotZero(value) {
    //Way to detect -0
    //console.log(value/0) will be Infinity
    //So, value/-0 === -Infinity
    //So, this is way to figure out if number is equal to -Infinity
    //Only one that is is -0
    return 1 / value === -Infinity;
}

console.log(isNotZero(0))
console.log(isNotZero(-0))
console.log(isNotZero(3));