// P: array or 1's and 0's
// R: the value of the binary array as an integer
// E: [0,0,0,1] => 1
// P: use the parseInt method to parse the array as a string with a radix of 2

const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2)
  };
  