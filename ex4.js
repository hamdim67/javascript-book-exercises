//Explain why this code logs '510' instead of 15
console.log('5' + 10);

//This logs '510' b/c the '+' operator does type coercion,
//so it changes 10 to a string '10' and add both strings together to get '510'
