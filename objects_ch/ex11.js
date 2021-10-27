//Write some code to replace the value 6 in 
//the following object with 606:

let obj = {
    foo: { a: "hello", b: "world" },
    bar: ["example", "mem", null, { xyz: 6 }, 88],
    qux: [4, 8, 12]
};

obj.bar[3]['xyz'] = 606;
//Access value of 'bar' property, which is an array
//Then to access the 3rd element in the array use [3]
//That value is an object, so use bracket (or dot) notation to acess 
//the value of the 'xyz' property
console.log(obj);
