let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj); 
myObj.qux = 3; 
console.log(myObj);

//What will the below code return without running it?


// let objKeys = Object.keys(myObj);
// objKeys.forEach(function(key) {
//   console.log(key);
// });


// for (let key in myObj) {
//   console.log(key);
// }

//Both snippets iterate over keys of myObj

//So, 1st snippet iterats over myObj OWN properties
// and returns qux 

//But for-in loop iterates over ALL the keys of myObj
//(even inherited ones)

//So, 2nd snippet logs
//qux
//foo
//bar