// P: a string containing only letters and one single space between words
// R: return the first letter of each word in the string as a single string 
// E: 'This Is A Test' => 'TIAT'
// P: split the string into an array, loop through the array and grab the first letter of each string, return those letters as a string 

function makeString(s){
    let firstLetters = ''
    
    s = s.split(' ')
    
    for (let i = 0; i< s.length; i ++){
      firstLetters += s[i][0]
    }
    
    return firstLetters
    
  }

//   Refactored

function makeString(s){
    return s.split(' ').map((e,i,a) => e[0]).join('')
  }