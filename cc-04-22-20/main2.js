// P:
// R: Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// E: invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// P: take the array and multiply each element by -1

function invert(array) {
    return array.map(a => a * -1) ;
 }