// P: string
// R: all number filtered from string as number
// E:a5d78fn => 578
// P: loop through string and filter the numbers, return the number 

var FilterString = function(value) {
    return +value.split('').filter(e => e == Number(e)).join('')
  }