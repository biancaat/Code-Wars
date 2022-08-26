// P: string
// R: string reversed
// E: hello world => world hello
// P: split string into words array, reverse the array and join the string 

function reverse(string){
    return string.trim().split('').reverse().join('')
  }