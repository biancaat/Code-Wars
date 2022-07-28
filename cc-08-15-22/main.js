// P: 2 numbers
// R: array of numbers that are between and including the parameters
// E: 1,4 => [1,2,3,4]
// P: create empty array, create for loop, push the numbers into the array and return it

function between(a, b) {
    let arr = []
    
    for (let i = a; i <= b; i++){
      arr.push(i)
    }
    return arr
  }
  