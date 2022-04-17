// P:
// R: Complete the square sum function so that it squares each number passed into it and then sums the results together. For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
// E: (squareSum([1,2]), 5)
// (squareSum([0, 3, 4, 5]), 50)
// (squareSum([]), 0)
// P: map through each array element and square it. Reduce each element to get the sum. return the sum.

function squareSum(numbers){
    return numbers.map(a => a**2).reduce((a,c)=> a+c,0);
}

// OR

function squareSum(numbers){
    return numbers.reduce((a,c) => a + (c**2),0)
  }