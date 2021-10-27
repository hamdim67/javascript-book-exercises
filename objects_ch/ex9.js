//What does the following code log to the console? Why?

let foo = {
    a: 'hello',
    b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
    argument1.a = 'hi';
    argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a); // logs 'hi'
//B/c objects are usually mutable, so you can change
//the component values. So, you can change the properties
//and values in an object
console.log(qux); // logs 'hello'
//B/c qux is reassigned inside the function, so
//it doesn't have an effect on the value of qux 
//on the global object b/c of function scoping
//So, value of 'qux' remains 'hello' on global object. 
//Also, strings are immutable, so you can't mutate
//the string represented by 'qux'; only reassign it. 




