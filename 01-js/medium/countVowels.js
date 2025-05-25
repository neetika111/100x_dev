/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const vowels = 'aeiouAEIOU';
    let count = 0;  
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
     console.log(count);
}
// Example usage
const inputString = "Hello World!";
countVowels(inputString); // Output: 3 (e, o, o)
// Test cases   
countVowels("Programming is fun!"); // Output: 6 (o, a, i, i, u)
countVowels("AEIOUaeiou"); // Output: 10 (all vowels)
countVowels("xyz"); // Output: 0 (no vowels)
// countVowels("This is a test string."); // Output: 6 (i, i, a, e, i)
// countVowels("The quick brown fox jumps over the lazy dog."); // Output: 11 (e, u, i, o, o, o, u, o, e, e, a)
// countVowels("1234567890!@#$%^&*()"); // Output: 0 (no vowels)
module.exports = countVowels;