// P: nested array
// R: sorted array, only one array
// E: [[3, 2, 1], [7, 9, 8], [6, 4, 5]], [1, 2, 3, 4, 5, 6, 7, 8, 9]
// P: join all elements, then split into an array, filter out empty strings, turn each element into number, sort the array from lowest to highest, return the new array


function flattenAndSort(array) {  
    return array.join().split(',').filter(e => e !== '').map(e => parseInt(e)).sort((a,b) => a-b)
  }