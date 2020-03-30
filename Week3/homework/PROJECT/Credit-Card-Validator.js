'use strict';


function number16AndDigitCheck(checkNumber) {
  // check the number is digit
  if (isNaN(checkNumber)) {
    return "invalid characters";
  } else {
    // check the number has 16 digits
    if (checkNumber.length == 16) {
      return isAllDigitsSameCheck(checkNumber);
    } else {
      return "Number has not got 16 digits";
    }
  }
}

// Check all of the digits are the same
function isAllDigitsSameCheck(checkNumber) {
  for (let index = 0; index < checkNumber.length; index++) {
    if (checkNumber[0] == checkNumber[index]) {
      if (index == 15) return "only one type of number";
      continue;
    } else {
      return finalDigitCheck(checkNumber);
      break;
    }
  }
}

// Check the final digit is even 
function finalDigitCheck(checkNumber) {
  const result = parseInt(checkNumber) % 2 == 0 ? sumAllDigitCheck(checkNumber) : "odd final number";
  return result;
}

// Check the sum of all the digits are greater than 16
function sumAllDigitCheck(checkNumber) {
  let totalSum = 0;
  for (let index = 0; index < checkNumber.length; index++) {
    totalSum += parseInt(checkNumber[index]);
  }
  const result = totalSum > 16 ? "credit card number is valid." : "sum less than 16";
  return result;
}


console.log(number16AndDigitCheck("9999777788880000")); // credit card number is valid.
console.log(number16AndDigitCheck("6666666666661666")); // credit card number is valid.
console.log(number16AndDigitCheck("a92332119c011112")); // invalid characters
console.log(number16AndDigitCheck("4444444444444444")); // only one type of number
console.log(number16AndDigitCheck("1111111111111110")); // sum less than 16
console.log(number16AndDigitCheck("6666666666666661")); // odd final number



