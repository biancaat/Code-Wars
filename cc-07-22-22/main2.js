// P: number
// R: boolean, true if number is a power of 2, false if not
// E: 2 => true, 333 => false
// P: use Math.log2() return true if number power of 2, false if not

function math(num){
    return Math.log2(num) % 1 == 0 ? true : false
  }