/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  
  // Normalize the string: remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
  // Initialize two pointers
  let left = 0;
  let right = str.length - 1;
  // Compare characters from both ends towards the center 
  while (left < right) {
    if (str[left] !== str[right]) {
      return false; // If characters don't match, it's not a palindrome
    }
    left++;
    right--;
  }
  // If all characters match, it is a palindrome
  if (left >= right) {
    return true;
  }
  // If we exit the loop without returning false, it means it's a palindrome
  // This condition is redundant but included for clarity     
  return true;
}

// Example usage  
const testStrings = ["apapa"];
testStrings.forEach((str) => {
  console.log(`Is "${str}" a palindrome?`, isPalindrome(str));
});

module.exports = isPalindrome;
