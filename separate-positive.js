"use strict";
// add whatever parameters you deem necessary & write docstring
/** Function takes in an unsorted array and will
 * return a new array with positive values on the right
 * and negative values on the left
 */

function separatePositive(ints) {
  //create pointers for left and right side of array
  let left = 0;
  let right = ints.length - 1;

  while (left < right) {
    //if left number is negative and the right is positive, then switch
    if (ints[left] < 0 && ints[right] > 0) {
      [ints[left], ints[right]] = [ints[right], ints[left]];
    }
    //if left number and right number are both positive, left goes up
    else if (ints[left] > 0 && ints[right] > 0) {
      left++;
    }
    //if left number and right number are both negative, right goes down
    else if (ints[left] < 0 && ints[right] < 0) {
      right--;
    }
    else {
      left++;
      right--;
    }
  }
  return ints;

}
