'use strict';

// Create an array with 2 predefined strings
const groceryArray = ["bananas", "milk"];

// Write a function 
const addToShoppingCart = grocery => { // It takes in 1 parameter
  groceryArray.push(grocery);// The push() method adds one or more elements to the end of an array
  if (groceryArray.length > 3) {
    groceryArray.shift();  // The shift() method removes the first array element
  }
  // Return a string
  let result = `You bought ${groceryArray}!`;
  return result;
}


// Call the function 3 times, each time with a different string as the argument.
console.log(addToShoppingCart("apples"));
console.log(addToShoppingCart("eggs"));
console.log(addToShoppingCart("orange juice"));
