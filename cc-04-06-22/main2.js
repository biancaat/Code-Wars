// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.

// P: 
// R: returns the sum of an array, if the array does not have any numbers, return 0
// E: Input: [1, 5.2, 4, 0, -1]
//    Output: 9.2

//    Input: []
//    Output: 0

//    Input: [-2.398]
//     Output: -2.398
// P: create function that takes in an array
//    loop through the array to create a sum of the numbers. use .reduce()?

function sum (arr){
    return arr.reduce((accumulator,current) => accumulator + current, 0)
}

console.log(sum([1,2,3,4]),10)