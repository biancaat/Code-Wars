// P:
// R: Complete the solution so that it reverses all of the words within the string passed in.
// E: "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
// P: return a string that is split into an array, the array order is reversed and then the array is joined to form a string


function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  }
