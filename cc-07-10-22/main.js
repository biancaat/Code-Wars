// P: array of arrays
// R: the sum of the lowest numbers in each array
// E: [[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]] => 9
// P: map through the array and sort each from ascending to descending and return the first element in each sub array. reduce to get the sum. 

function sumOfMinimums(arr) {
    return arr.map(e => e.sort((a,b) => a-b)[0]).reduce((a,c) => a+c)
  }