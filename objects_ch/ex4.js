//Create an array from the keys of the object 
//obj below, with all of the keys converted to uppercase. 
//Your implementation must not mutate obj.

let obj = {
    b: 2,
    a: 1,
    c: 3,
};

let newObj = Object.keys(obj); 

//I made it a lot harder than it was
//All I needed to do was use map
//in which callback function would change keys to uppercase with 
//upperCase() method

let upperKeys = newObj.map(key => key.toUpperCase())
console.log(upperKeys);


//We learned 2 wasy to iterate over the properties of an object
//1. Object.keys
//2. for-in loop with hasOwnProperty()

//2nd way requires more work
//So 1st way was easier
//So, we did Object.keys() to get an array of 'obj' properties
//Then, we map over the keys and change them to upperCase with upperCase() method

