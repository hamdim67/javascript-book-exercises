//Basic fibonacci sequence
////Each number in this sequence is SUM of previous 2 numbers in the sequence

//fibonacci(0) = 0
// fibonacci(1) = 1
// fibonacci(2) = fibonacci(1) + fibonacci(0) = 1 + 0 = 1
// fibonacci(3) = fibonacci(2) + fibonacci(1) = 1 + 1 = 2
// fibonacci(4) = fibonacci(3) + fibonacci(2) = 2 + 1 = 3
// fibonacci(5) = fibonacci(4) + fibonacci(3) = 3 + 2 = 5
// fibonacci(6) = fibonacci(5) + fibonacci(4) = 5 + 3 = 8
// fibonacci(7) = fibonacci(6) + fibonacci(5) = 8 + 5 = 13


function fibonacci(number) {
    if (number < 2) return number; // 0 if number is 0, 1 if number is 1
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
  
  console.log(fibonacci(6));  // => 8
  console.log(fibonacci(20)); // => 6765