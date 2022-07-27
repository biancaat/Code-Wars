// P: array of numbers, array length will be odd and filled with valid numbers
// R: return the element that is different
// E: [1,1,1,1,1,1,12] => 12
// P: sort the array, if the first element is the same as the second element return the last element, else return the first element.

function stray(numbers) {
    let sorted = numbers.sort()
     if (sorted[0] === sorted[1]){
       return sorted[sorted.length-1]
     } else {
       return sorted[0]
     }
   }