let counter = 0;

while (counter = 1) { //Here, we reassign counter to 1
    //Loop condition NEVER becomes FALSE since we reassigned 'counter' and it will ALWAYS equal 1
    //So, the loop keeps executing forever
  console.log(counter); //here, we log 1 to the console
  counter += 1; //Here, we increment counter by 1 (so 1 + 1 = 2)

  if (counter > 2) {  //This never becomes true, so the loop never exits
    break; 
  }
}

