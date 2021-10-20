for (let i = 0; i < 5;) {
    console.log(i += 1);
    //same as console.log(i = i + 1);
    //so it logs:
    // i = 0 + 1 = 1
    // i = 1 + 1 = 2
    // i = 2 + 1 = 3
    // i = 3 + 1 = 4
    // i = 4 + 1 = 5 
    // and then stops at 4, since 5 is not less than 5
    //so no error, since ALL 3 components of 'for' loop are optional
    //And we increment the loop in the console.log
  }