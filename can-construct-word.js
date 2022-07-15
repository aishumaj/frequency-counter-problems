"use strict";

/** Function confirms if the characters in a word are also contained in a
 * separate string of letters.
*/
function canConstructWord(word, letters) {
  //create two variables that store objects made by the frequency counter to
  //count characters in both word and letter string
  const wordFreq = getFrequencyCounter(word);
  const letterFreq = getFrequencyCounter(letters);

  for (let char in wordFreq) {
    //edge case: does key exist in letter object?
    if (!(char in letterFreq)) {
      return false;
    }
    //compare values of characters in word to check if count of key in word is
    //less than or equal to count of key in letter string
    if (wordFreq[char] > letterFreq[char]) {
      return false;
    }
  }
  return true;
}

/**Creates an object containing a count of each distinct element from an argument */
function getFrequencyCounter(items) {
  const freqs = {};

  for (const item of items) {
    const curr = freqs[item] || 0;
    freqs[item] = curr + 1;
  }

  return freqs;
}
