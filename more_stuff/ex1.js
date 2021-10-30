//What does this code log to the console? Why?

let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

//It logs [1, 4, 3]
//When array2 is initiated to array1, it copies the reference
//to array1; it does NOT create a new array, so both 
//variables point to the same array. 

//So, any operation that is done to array1 will affect array2. 
//Also, the operation mutates an element in the array; 
//it does not mutate the array and so still points to the same array

