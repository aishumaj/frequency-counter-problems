"use strict";

// add whatever parameters you deem necessary & write docstring

/** Function takes in two numbers
 * returns true if both numbers have equivalant frequencies of matching digits
 * returns false if frequency of matching digits are not equivalant
 * */
function sameFrequency(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  if (num1.length !== num2.length) {
    return false;
  }

  const freqNum1 = getFrequencyCounter(num1);
  const freqNum2 = getFrequencyCounter(num2);

  for (let num in freqNum1) {
    if (freqNum1[num] !== freqNum2[num]) {
      return false;
    }
  }
  return true;
}

function getFrequencyCounter(items) {
  const freqs = {};

  for (const item of items) {
    const curr = freqs[item] || 0;
    freqs[item] = curr + 1;
  }

  return freqs;
}

