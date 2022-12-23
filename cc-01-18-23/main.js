// P: a string that contains an even or add number of characters
// R: return the string split in multiples of two charcters, if the string length is odd add "_" at the end, return as an array
// E: 'abc' => ['ab' 'c_']
// P: if the str length is not even add an '_' at the end. loop through the string in increments of 2, push every 2 characters into a new array, return the array



function solution(str){
    if (str.length % 2 != 0){
      str += '_'
    }
    
    let arr = []
    
    for (let i = 0; i< str.length; i+= 2){
      arr.push(`${str[i]}${str[i+1]}`)
    }
    
    return arr
  }
  
  solution('sabcd')