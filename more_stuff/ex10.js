//This exercise has nothing to do with this chapter. Instead, it uses concepts you learned 
//earlier in the book. If you can't figure out the answer, don't worry: this question can 
//stump developers with more experience than you have.

//Consider this code:

// > let x = "5"
//     > x = x + 1
// = "51"

//Now consider this:

//What gets returned by y++? Why?

let y = "5";
//If we console.log(y++) we will get 5, b/c ++ is after y, so 
//it will give us value of y before increment
console.log(y++)




//++variable increments the variable, returning the new value.

// variable++ increments the variable, but returns the old value.

// --variable decrements the variable, returning the new value.

//     variable-- decrements the variable, but returns the old value.


//So, y++ will give us y BEFORE it increments
//so y = 5; 