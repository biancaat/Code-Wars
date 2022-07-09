// P: array of numbers
// R: array of numbers, first number is sum of all even indexes and, second number is sum of all odd indexes
// E: [50,60,70,80]), [120,140]
// P: declare variable the holds all even index numbers, do the same for odd, reduce each array to get the sum and return the two sums as an array

function rowWeights(array){
  
    let first = array.filter((e,i,a) => i % 2 === 0 ).reduce((a,c) => c+a,0)
    
    let second = array.filter((e,i,a) => i % 2 !== 0 ).reduce((a,c) => c+a,0)
    
    return [first, second]
    
  }