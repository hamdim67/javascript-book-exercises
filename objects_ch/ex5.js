//Create a new object named 'myObj' that uses
//'myProtoObj' as its prototype

let myProtoObj = {
  foo: 1,
  bar: 2,
};

console.log(myProtoObj);

//Use Object.create() to create a new object
//based on an existing object
//Then existing object will be prototype of new obj

let myObj = Object.create(myProtoObj); 
//doing console.log(myObj) won't return
//anything b/c myObj is technically empty
//but if you do myObj.foo you'll get something
//b/c it inherits from myProtoObj