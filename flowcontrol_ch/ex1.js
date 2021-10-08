false || (true && false);
//remember, && and || do short-circuit evaluation
//so, the return value is ALWAYS the value of the operand evaluated "last"
//so, here it would be the 1st 'false' operand
// result => 'false'

true || 1 + 2;
//similar thing here
// || operator does short-circuiting so,
// if one operand is true, other must be true, so evaluation terminates
// at first 'truthy' value
// return value => true

1 + 2 || true;
// same as above, so return value => 3

true && 1 + 2;
// return value => 3 (returns last operand evaluated)
false && 1 + 2;
// return value => false (short-circuits after 'false');

1 + 2 && true;
//return value => true;
32 * 4 >= 129;
// return value => false;

false !== !true;
//return value => false;

true === 4;
// return false // === must be same TYPE and VALUE to be true;

false === (847 === '847');
// return true;
false === (847 == '847');
// return false;

!true || !(100 / 5) === 20 || 328 / 4 === 82 || false;
// break down:
// false || (false) || true || false;
// here, JS will short-circuit at first truthy value (expression ((328/4) === 82) evaluates to true, so return value is true)
//return value => true;
