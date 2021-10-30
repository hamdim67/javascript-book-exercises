// Write a function that searches an array of strings for every element
// that matches the regular expression given by its argument. The function should 
//return all matching elements in an array.

let words = [
    'laboratory',
    'experiment',
    'flab',
    'Pans Labyrinth',
    'elaborate',
    'polar bear',
];

// function allMatches(arr, regex) {
//     //loop through the values in the array with for/of
//     let matches = [];

//     for (let i = 0; i < arr.length; i += 1) {
//         if (regex.test(arr[i])) {
//             matches.push(arr[i])
//         }
//     }

//     return matches;
// }

//Another solution (I didn't understand this at all)

function allMatches(arr, regex) {
    return arr.filter(word => regex.test(word))
}

console.log(allMatches(words, /lab/g)); // => ['laboratory', 'flab', 'elaborate']
