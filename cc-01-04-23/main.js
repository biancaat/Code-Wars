// P: nested array
// R: the array joined as a string with each array starting on a new line
// E: [ 0, 1, 2, 3, 45 ],[ 10,11,12,13,14 ],[ 20,21,22,23,24 ],[ 30,31,32,33,34 ]] => '0,1,2,3,45
// 10,11,12,13,14
// 20,21,22,23,24
// 30,31,32,33,34'
// P: join array on new line with join method, join method creates a new string by concatenating the array as a string, the \n parameter separates the array contents on a new line. 

function toCsvText(array) {
    return array.join('\r\n')
  }
  