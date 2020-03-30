'use strict';

// Write a function It takes 1 parameter
function calculateTotalPrice(buyItem) {
  let totalPrice = 0;
  for (let i = 0; i < Object.keys(buyItem).length; i++) {
    totalPrice += Object.values(buyItem)[i];
  }
  // Return a number
  return totalPrice;
}

// Create an object with 5 properties.
let cartForParty = {
  bread: 1.5,
  chips: 1,
  cola: 2.5,
  hazelnut: 4,
  sweetmeat: 2.6
}


// Call the function 1 time, giving it the object cartForParty as an argument
console.log(calculateTotalPrice(cartForParty));