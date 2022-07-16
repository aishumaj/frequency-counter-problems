"use strict";
// add whatever parameters you deem necessary & write docstring
/** Function takes in 2 strings
 * if string1 appears in string2 and order of appearance of characters are the
 * same in string1 as they are in string 2; return true
 * ex. isSubsequence('sing', 'sting');        // true
 * if characters appear in different order return false
 */

function isSubsequence(s1, s2) {
  //create pointer for s1 and s2
  let pointer1 = 0;
  let pointer2 = 0;

  //iterate through s2 until s1 has found all matches
  while (pointer2 < s2.length) {
    //if s2[i] = s1[j]; i++
    if (s2[pointer2] === s1[pointer1]) {
      pointer2++;
    }
    //if j = s1.length return true
    // else j++
    if (pointer1 === s1.length) {
      return true;
    } else {
      pointer1++;
    }
    //if s2[i] != s1[j]; i++
    if (s2[pointer2] !== s1[pointer1]) {
      pointer2++;
    }



  }
  return false;

}
