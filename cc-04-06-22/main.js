// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]


// P:   arameters : edge Cases
// R:   eturn: return array with each value doubled
// E:   if given [2,3,4] return [4,6,8]
//      if given [4,5,6] return [8,10,16]
//      if given [2,22] return [4,44]
// P:   make a function that takes in an array
//      map through the array and multiply each element by 2
//      return new aray

function doubled (arr){
    if (arr.length === 0 || arr === undefuned){
        console.log('Array is invalid')
    } else{
    return arr.map(element => element *= 2)
}}

console.log(doubled([2,3,4]),[4,6,8]);

