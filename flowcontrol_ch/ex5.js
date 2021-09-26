//Refactor following statement to use an 'if' statement instead

return foo() ? 'bar' : qux();

//Here, the entire structure of the ternary operator is
//an 'expression' so, we can treat it as a 'value'
//Means we can assign it to a variable, pass it as an argument,
//Since if/else is a statement and not expression, we can't capture its result to a variable

//Solution

if (foo()) {
	return 'bar';
} else {
	return qux();
}
