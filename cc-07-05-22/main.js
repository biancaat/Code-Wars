// P: number
// R: number rounded to next highest multiple of 5
// E: 17 => 20
// P:

function roundToNext5(n){
    return n === 0 ? 0 : n % 5 === 0 ? n : n < 0 ? n - (n % 5) : 5 - (n % 5) + n
  }

//   refactored

function roundToNext5(n){
    return Math.ceil(n/5)*5
}