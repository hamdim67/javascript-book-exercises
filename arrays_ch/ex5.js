//Write a findIntegers function that takes an array
// argument and returns an array that contains only 
//the integers from the input array.Use the filter 
//method in your function.

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function findIntegers(arr) {
    return arr.filter(function (value) {
        return Number.isInteger(value);

    });
}

let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]

//Word 'return' is a statement that specifies
        //the value to return from a function
        //

        // if we did console.log(Number.isInteger(value))
        //we would get 'true' b/c ...I'm not sure


