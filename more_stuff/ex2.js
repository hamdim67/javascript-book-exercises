//What does the following code and stack trace tell you?
//Why

// $ node exercise2.js
//     / Users / wolfy / tmp / exercise2.js: 4
// console.log(greeting);
//               ^

//     ReferenceError: greeting is not defined
//     at hello(/Users/wolfy / tmp / exercise2.js: 4: 15)
//     at Object.< anonymous > (/Users/wolfy / tmp / exercise2.js: 13: 1)
//     at Module._compile(internal / modules / cjs / loader.js: 721: 30)
//     at Object.Module._extensions..js(internal / modules / cjs / loader.js: 732: 10)
//     at Module.load(internal / modules / cjs / loader.js: 620: 32)
//     at tryModuleLoad(internal / modules / cjs / loader.js: 560: 12)
//     at Function.Module._load(internal / modules / cjs / loader.js: 552: 3)
//     at Function.Module.runMain(internal / modules / cjs / loader.js: 774: 12)
//     at executeUserCode(internal / bootstrap / node.js: 342: 17)
//     at startExecution(internal / bootstrap / node.js: 276: 5)

    //Tells you that there is a ReferenceError in which variable 'greeting' is not defined
    //location of this error is at the 'hello' function on line 4, character 15
    //It also says that we called the 'hello' function as an anonymous function (one with no name)
    //The trace treats code at the global level as belonging to an anonymous function 

