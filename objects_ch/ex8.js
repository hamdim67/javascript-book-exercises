//Create a function that creates and returns a copy of an object. The function should take
//two arguments: the object to copy and an array of the keys that you want to copy. Do not mutate the original object.

// The function should let you omit the array of keys argument when calling the function. 
//If you do omit the argument, the function should copy all of the existing keys from the object.

// Here are some examples for your reference:

//Examples

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

// let newObj = copyObj(objToCopy);
// console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

// let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
// console.log(newObj2);       // => { foo: 1, qux: 3 }

// let newObj3 = copyObj(objToCopy, [ 'bar' ]);
// console.log(newObj3);       // => { bar: 2 }


// Not able to solve it on my own 
//But this is how you would extract properties
//from an object

//We have to write a JS function that 
//extracts properties from an object
//to another object

//Example
//If obj1 and obj2 are 2 objects then

// obj1 = {color: "red", age: "23", name: "cindy"}
// obj2 = extract(obj1, ["color", "name"]); 

// //After passing thorugh the extract function, they should become like

// obj1 = same; 
// obj2 = {color: "red", name: "cindy"}; 

function copyObj (obj, keys) {
  let destinationObj = {}; 
  if (keys) {
    keys.forEach(function(key) {
      destinationObj[key] = obj[key]
    }); 
    
    return destinationObj; 
    } else {
      return Object.assign(destinationObj, obj)
    }
}; 

console.log(copyObj(objToCopy)); 

console.log(copyObj(objToCopy, ['foo', 'bar']));

console.log(copyObj(objToCopy, ['bar']));

