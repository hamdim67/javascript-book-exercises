//What are final 'length' values for following arrays?

let array1 = [1, 2, undefined, 4]; 

//array1.length = 4

let array2 = [1];
array2.length = 5; 

//array2.length =5; //already set

let array3 = [];
array3[-1] = [1];

//array3 = ['-1': 1]
//So, array.length = 1

//Wrong!!
//Non-integer values do NOT count toward .length
//So, array3.length = 0

let array4 = [1, 2, 3, 4, 5];
array4.length = 3;

//Here, array4 is truncated
//So array4.length = 3; 

let array5 = [];
array5[100] = 3;

//array5.length = 101
//Here, it's saying value at index 100 is 3,
//So that made array 5 have 101 indices