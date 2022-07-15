"use strict";
/**Function takes two numbers and returns the average of the two numbers */
function findAvg(a, b) {
  return (a + b) / 2;
}


/**Confirms if a sorted array of numbers contains two values that have an
 * average equal to an indicated desired average; returns false if no such pair
 * exists.*/
function averagePair(nums, targetAvg) {
  //create two pointers that start at either end of sorted array
  let left = nums[0];
  let right = nums[nums.length - 1];

  //take average of pointers and compare to desired avg; if avg is too high,
  //move right pointer one down; if avg is too low, move left pointer one up
  while (left < right) {
    if (findAvg(left, right) === targetAvg) {
      return true;
    } else if (findAvg(left, right) < targetAvg) {
      left++;
    } else {
      right--;
    }
  }
  //return false if no pair equals desired avg
  return false;
}

