// //Use map and filter to first determine the lengths
// // of all the elements in an array of string values, 
// //then discard the even values(keep the odd values).

// let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// //1st step: Create an array of the lengths
// //2nd step: Keep the odd values (filter them out)

// function oddLengths(arr) {
//     //1st create array of lengths
//     let lengths = arr.map((val) => val.length);
//     //2nd step is discard even values
//     //So use filter to filter out even values
//     let oddLengths = lengths.filter((number) => {
//         return !(number % 2 === 0)
//     })
//     return oddLengths;
// }


// console.log(oddLengths(arr)); // 
// //1st step should return [1, 4, 5, 3, 2]

// //=> [1, 5, 3]


//Exercise 8 (Do the above w/ just 'reduce' method)

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(strings) {
    let oddLengths = strings.reduce(function (accumulator, element) {
        //Set accumulator to empty array
        //Then make an if statement to filter out odd numbers
        //then push the odd numbers onto accumulator array
        //Then return accumulator array
        //Then finally return oddLengths array
        if (element.length % 2 === 1) {
            accumulator.push((element.length))
        }
        return accumulator;
    }, []);
    return oddLengths;
}


console.log(oddLengths(arr));
