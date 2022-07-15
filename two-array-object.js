"use strict";

/**Create an object from an array of keys and an array of values where each
 * element in key array corresponds with respective element in value array.
 */
function twoArrayObject(keys, values) {
  //create an empty obj
  let arraysToObj = {};

  //loop through keys array
  for (let i = 0; i < keys.length; i++) {
    //if no more corresponding values then value is null
    if (values[i] === undefined) {
      arraysToObj[keys[i]] = null;
    } else {
      //create a key-value pair in object with each index
      arraysToObj[keys[i]] = values[i];
    }
  }
  return arraysToObj;
}
