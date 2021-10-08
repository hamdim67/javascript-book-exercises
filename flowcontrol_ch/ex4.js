function barCodeScanner(serial) {
	switch (serial) {
		case '123':
			console.log('Product1');
		case '113':
			console.log('Product2');
		case '142':
			console.log('Product3');
		default:
			console.log('Product not found!');
	}
}

barCodeScanner('113');

//What this logs to the console
////This will log ALL statements in the switch statement
//since the 'break' statement was ommited from each case, the execution
//of the switch statement 'falls through' to the next case clause. So, the console
//will log the statements or expressions associated with all case clauses.
