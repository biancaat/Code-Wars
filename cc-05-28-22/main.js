// P: array
// R: sorted array
// E: minMax([1,2,3,4,5])   == [1,5]
// P: sort the array from lowest to highest, return an array of index 0 and the last index

function minMax(arr){
    let sorted = arr.sort((a,b) => a-b)
    return [sorted[0], sorted[sorted.length-1]]
  }