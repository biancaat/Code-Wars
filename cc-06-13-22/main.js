// P: number
// R: array of powers of 2
// E: n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
// P: create an ampty array to hold the values, create a loop to loop through the amaount of times we are powering 2 to the n. push the result to the array and return the array

function powersOfTwo(n){
    let arr = []
    for (let i = 0; i <= n; i++){
      arr.push(Math.pow(2,i))
    }
    return arr
  }