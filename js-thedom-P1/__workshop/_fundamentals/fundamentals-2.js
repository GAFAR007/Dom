// Exercise 2
//
// Part 1 - Write
// ---------------
// Write a function that accepts an array with 2 values,
// and returns a new string made of the original string repeated by the provided number of times.
//
// - The first value of the array must be a string, and the second a number.
// - If a negative number or zero is specified, return an empty string.
// - If any invalid parameters are supplied return undefined.
//
// example: repeat(['foo', 3]) returns 'foofoofoo'

const repeat = (arr) => {
  if (arr.length !== 2) {
    return undefined; // The array must have exactly 2 elements
  }

  const str = arr[0];
  const num = arr[1];

  if (
    typeof str !== "string" ||
    typeof num !== "number" ||
    num < 1
  ) {
    return undefined; // Check for invalid parameters
  }

  return str.repeat(num);
};

console.log(repeat(["foo", 3])); // Output: 'foofoofoo'
console.log(repeat(["bar", 0])); // Output: ''
console.log(repeat(["baz", -2])); // Output: undefined
console.log(repeat([123, 2])); // Output: undefined
console.log(repeat(["abc", 5])); // Output: 'abcabcabcabcabc'

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = repeat;
