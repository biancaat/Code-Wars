// P: string
// R: array of strings sorted in alphabetical order by the last character in the word
// E: 'hello world' => ['world', 'hello']
// P: turn the string into an array, sort the array in alphabetical order based on last charater, return the new array

function last(x){
    return x.split(' ').sort((a, b)=>  a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
      
  }