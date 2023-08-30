// Exercise 1
//
// Part 1 - Write
// ---------------
// Write a function that
// - accepts an array.
// - The array has 3 elements.
// - The first element of the array is a string that represents an operation.
// - If the operation is
//      - "add", return the sum of the two other elements of the array.
//      - "sub", return their difference.
//      - "mul", return their product.
//      - "div", return the quotient of the two numbers.
//      - Anything else return undefined.
// - If the two values are not numbers, return undefined

// For example:
// calculator(["add", 10, 20]); // 30

const calculator = (arr) => {
  if (arr.length !== 3) {
    return undefined; // The array must have exactly 3 elements
  }

  const operation = arr[0];
  const num1 = arr[1];
  const num2 = arr[2];

  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return undefined; // Check if both values are numbers
  }

  switch (operation) {
    case 'add':
      return num1 + num2;
    case 'sub':
      return num1 - num2;
    case 'mul':
      return num1 * num2;
    case 'div':
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return undefined; // Avoid division by zero
      }
    default:
      return undefined; // Unknown operation
  }
};

console.log(calculator(["add", 10, 20])); // Output: 30
console.log(calculator(["sub", 10, 20])); // Output: -10
console.log(calculator(["mul", 10, 20])); // Output: 200
console.log(calculator(["div", 20, 10])); // Output: 2
console.log(calculator(["mod", 10, 3]));  // Output: undefined
console.log(calculator(["add", "10", 20])); // Output: undefined

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it...
module.exports = calculator;
