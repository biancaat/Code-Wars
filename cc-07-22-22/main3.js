// P: number
// R: number of digits in the parrameter
// E: 256 => 3
// P: return number as a string, then turn to array and then the length of the array

function digits(n) {
    return n.toString().split('').length
   }