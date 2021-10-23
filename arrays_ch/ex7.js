//Use reduce to compute the sum {
//of the squares of all of the numbers in an array:

let array = [3, 5, 7];

//Make the function and then do reduce inside the function
function sumOfSquares(arr) {
    return arr.reduce(function (accumulator, element) {
        // sum of squares = (0) + (3*3) = 9
        // 9 + (5*5) = 34
        //34 + (7 * 7) = 83

        return accumulator + (element * element);
    }, 0);
};

console.log(sumOfSquares(array)); // => 83