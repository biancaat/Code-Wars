// P: 2 digit number
// R: sum of the 2 digit number
// E: 10 --> 1, 99 --> 18, -32 --> 5
// P: turn number to string and create an array. if the first digit is negattive remove the element from the array. turn the string array into a number array and reduce to get sum.

function sumDigits(number) {
    let arr = number.toString().split('')
    if (arr[0] === '-'){
      let removeFirst = arr.shift()
    }
    return arr.map(a => parseInt(a)).reduce((a,c) => a+c,0)
    
  }