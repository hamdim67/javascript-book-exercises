function isArrayEmpty(arr) {
	if (arr) {
		console.log('Not Empty');
	} else {
		console.log('Empty');
	}
}

isArrayEmpty([]);

//This logs 'Not Empty' to the console
//B/c, even though array IS empty == no values and length is 0,
//It's NOT falsy b/c an empty array is NOT a falsy value. So,
//JS evaluates empty arrays as 'truthy' values and executes (arr) as true
