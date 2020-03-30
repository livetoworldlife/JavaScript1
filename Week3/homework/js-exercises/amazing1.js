'use strict';

// Write a function named
function giveCompliment(myName) { // It takes 1 argument
  // create an array with 10 strings
  const complimentList = ["great", "amazing", "awesome", "perfect", "handsome",
    "marvelous", "extraordinary", "wonderful", "talented", "clever"];
  // Write logic that randomly selects a compliment
  let randOfComList = Math.floor(Math.random() * complimentList.length);
  let compliment = complimentList[randOfComList];
  // Return a string
  let result = `You are ${compliment}, ${myName}!`
  return result;

}

// Call the function three times with another function
const callTreeTimes = callTimes => {
  for (let index = 0; index < callTimes; index++) {
    console.log(giveCompliment("Ersin"));
  }
}

callTreeTimes(3);