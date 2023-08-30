// Exercise 5
// -------------
//
// Part 1 - Write
// ---------------
// Write a function that accepts a string and returns that string, capitalized.
// e.g. f("hello world"); // Hello World
// e.g. f("BACON BROCOLI"); // Bacon Brocoli

const makeIntoTitle = (sentence) => {
  if (typeof sentence !== 'string') {
    return undefined; // Return undefined for non-string input
  }

  const words = sentence.split(' ');

  const capitalizedWords = words.map((word) => {
    if (word.length === 0) {
      return '';
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  return capitalizedWords.join(' ');
};

console.log(makeIntoTitle("hello world"));     // Output: "Hello World"
console.log(makeIntoTitle("BACON BROCOLI"));   // Output: "Bacon Brocoli"
console.log(makeIntoTitle("this IS a TeSt"));  // Output: "This Is A Test"
console.log(makeIntoTitle(""));                // Output: ""
console.log(makeIntoTitle("a B c d e F"));    // Output: "A B C D E F"
console.log(makeIntoTitle(123));               // Output: undefined

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = makeIntoTitle;
