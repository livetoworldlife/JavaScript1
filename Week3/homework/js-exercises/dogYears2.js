'use strict';

// Write a function named
const calculateDogAge = ageOfDog => { // It takes 1 argument
  // Calculate your dog's age based on the conversion rate of 1 human year to 7 dog years.
  let rate = 7;
  let conversion = ageOfDog * rate;
  // Return a string
  let result = `Your doggie is  ${conversion} years old in dog years!`;
  return result;
}


// Call the function three times with different sets of values. 
const callTreeTimes = (setValues = []) => {
  let callTimes = 3;
  for (let index = 0; index < callTimes; index++) {
    let valueOfDogAge = setValues[index];
    console.log(calculateDogAge(valueOfDogAge));
  }
}

callTreeTimes([5, 7, 21]);
