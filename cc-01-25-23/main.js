// P: an array of numbers
// R: return the two highest number is ascending order
// [1,56,3,] => [3,56]
// sort the array and return the first two elements in ascending order

function twoOldestAges(ages){
    ages = ages.sort((a,b) => b-a)
    return [ages[0], ages[1]].sort((a,b) => a-b)
  }