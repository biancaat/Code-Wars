// P: array of numbers
// R: the number that does not have a matching number with an inversion of positive or negative
// E: [-3,1,2,3,-1,-4,-2] => -4
// P: find the index of the number that doesnt have a match, return the element with that index

function solve(arr){
    let indexOfMissing = arr.map((e,i,a) => a.includes(e *-1)).indexOf(false)
    return arr[indexOfMissing]
 }

