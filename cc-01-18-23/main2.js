// P: a string that is in camel case format
// R: the string split where the capitals are so that the string is no longer in camel case
// E: 'helpMe' => 'help Me'
// P: loop through string, if element is a capital add a space to the front of the letter, return the new string



function solution(string) {
    string == "" ? "" : string
    
    let splitStr = []
    
    for (let i = 0; i < string.length; i++){
      if (string[i] == string[i].toUpperCase()){
        splitStr.push(` ${string[i]}`)
      } else {
        splitStr.push(string[i])
      }
    }
    return splitStr.join('')
      
  }
  
  
  solution('helpMe')