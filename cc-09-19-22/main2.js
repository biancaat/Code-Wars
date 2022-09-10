// P: number
// R: boolean true if number is tidy (number whose digits are in non decreasing order)
// E: 12 => true, 43 => false
// P: turn number into array of number, sort the array from lowest to highest, convert back to one number if the mutaated nunber == the n parameter return true, else false

function tidyNumber(n){
    return n.toString().split('').sort((a,b) => a-b).join('') == n.toString() ? true : false
  }