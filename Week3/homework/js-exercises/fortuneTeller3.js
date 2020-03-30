'use strict';


// It takes 4 parameters
const tellFortune = (numberOfChildren, partnerName, geographicLoc, jobTitle) => {
  // Return a string
  let result = `You will be a ${jobTitle} in ${geographicLoc}, and married to ${partnerName} with ${numberOfChildren} kids.`;
  return result;
}

// Create 4 arrays and Give each array 5 random values
let numChildren = [1, 2, 3, 4, 5];
let partnerNames = ["Nora", "Amber", "Zoe", "Isabella", "Eva"];
let locations = ["Amsterdam", "Hengelo", "Rotterdam", "Maastricht", "Utrecht"];
let jobs = ["Web Developer", "Database Administrator", "Front End Developer", "Software Developer", "IT Manager"];

// Randomly select values from the arrays.
const randomlySelectValues = (parameters = []) => {
  let randOfParameterIndex = Math.floor(Math.random() * parameters.length);
  let itemOfParameter = parameters[randOfParameterIndex];
  return itemOfParameter;
}

let num = randomlySelectValues(numChildren);
let part = randomlySelectValues(partnerNames);
let loc = randomlySelectValues(locations);
let job = randomlySelectValues(jobs);


// Call the function 1 time, by passing the arrays as the argument.
console.log(tellFortune(num, part, loc, job));