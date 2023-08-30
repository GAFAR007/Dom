// Exercise 4
//
// Part 1 - Write
// ---------------
// Write a function that accepts a string of multiple words and returns the longest word in the string.

// - If the input string is empty then return an empty string.
// - If multiple words have the same length, return the last one.

// Example
//   longestWord("hey hello morning") returns "morning"

// HINTS:
//  - You'll need to use the split string method
//  - `forEach` might be helpful

const longestWord = (str) => {
  if (typeof str !== "string") {
    return undefined; // Return undefined for non-string input
  }

  const words = str.split(" ");

  if (words.length === 0) {
    return ""; // Return empty string for empty input
  }

  let longest = "";

  words.forEach((word) => {
    if (word.length >= longest.length) {
      longest = word;
    }
  });

  return longest;
};

console.log(longestWord("hey hello morning")); // Output: "morning"
console.log(longestWord("")); // Output: ""
console.log(longestWord("a bb cccc dd eee")); // Output: "cccc"
console.log(longestWord("test 12345 abc")); // Output: "12345"
console.log(longestWord("one")); // Output: "one"
console.log(longestWord(123));

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = longestWord;
