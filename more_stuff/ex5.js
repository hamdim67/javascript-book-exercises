//What does the following function do?

function doSomething(string) {
    return string.split(' ')
        .reverse()
        .map((value) => value.length);
}

// Turns a string into an array, reverses that array, and then returns a NEW
//array containing the length of each word in the string

console.log(doSomething('The big black dog was loud'));
// returns [4, 3, 3, 5, 3, 3]