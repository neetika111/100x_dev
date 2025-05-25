/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
   
    const startTime = Date.now(); // Get the current time in milliseconds
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i; // Calculate the sum from 1 to n
    }
    const endTime = Date.now(); // Get the time after computation
    const timeTaken = (endTime - startTime) / 1000; // Calculate the time taken in seconds
    console.log(`Time taken to calculate sum from 1 to ${n}: ${timeTaken} seconds`);
    return timeTaken; // Return the time taken
}


// Example usage    
calculateTime(100); // Sum from 1 to 100
calculateTime(100000); // Sum from 1 to 100000