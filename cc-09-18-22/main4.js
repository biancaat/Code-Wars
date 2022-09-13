// P: array of numbers
// R: the product of the  number in size, of maximum numbers in the array
// E: [1,2,7,6,3,2] => 42
// P: sort the array from most to least, multiply elements based on sive param and return the product

function maxProduct(numbers, size){
    return numbers.sort((a,b) => b-a).filter((e,i,a) => i < size).reduce((p,c) => c*p)
  }