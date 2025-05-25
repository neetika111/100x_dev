/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {


    let maxii =0;
    for(let i=0;i<numbers.length;i++){

        if(numbers[i]>maxii){

             maxii = numbers[i];
           
        }
    }

    console.log(maxii);
}

const numbers = [3, 7, 2, 9, 1];
findLargestElement(numbers);
module.exports = findLargestElement;