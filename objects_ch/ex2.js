//Which of the following values are valid keys for an object?

//keys for an object has to be a string
//JS coerces all non-string key values to strings
//so they're ALL valid
//values can be any type

// 1
// Valid


//'1'

//undefined

//'hello world'
//valid

//true 
// valid

//'true'
//valid

let myObj = {}
myObj[true] = 'hello';
myObj['true'] = 'world';

myObj[undefined] = 'blue';

console.log(myObj);
//returns myObj = { true: 'world', undefined: 'blue'};

