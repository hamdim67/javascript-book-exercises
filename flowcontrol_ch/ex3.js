function evenOrOdd(num) {
	if (!Number.isInteger(num)) {
		console.log('Error! Not an Integer!');
		return;
	}
	if (num % 2 === 0) {
		console.log('even');
	} else {
		console.log('odd');
	}
}

evenOrOdd('true');

//check if num is integer and even
//then return number and true;
//check if num
