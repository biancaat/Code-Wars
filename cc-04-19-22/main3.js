// P:
// R: Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// E: For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.
// P: sort the array from lowest to highest. take the sum for the first two elements in the array. return the sum. 

function sumTwoSmallestNumbers(numbers) {  
    return numbers.sort((a,b)=> a-b).slice(0,2).reduce((a,c)=> a+c,0);
  }