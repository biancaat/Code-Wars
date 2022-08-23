// P: number
// R: padded number string max 5 zeros
// E: 345 => Value is 00435
// P:

function solution(value){
    let zero = '0'
    let arr = value.toString().split('')
    let zeros = 5 - arr.length
    return 'The value is ' + `${zero}`.repeat(zeros) + `${value}`
  }
  