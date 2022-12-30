// P: array of numbers that represent character codes
// R: if the element == the character code of a vowel, replace the element with the string vowel
// E: [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106] => [ 118, 'u', 120, 121, 'u', 98, 122, 'a', 120, 106, 104, 116, 113, 114, 113, 120, 106 ]
// P: loop through array, if element code is a vowel, replce the element with the string vowel, return the new array

function isVow(arr){
 
    let newArr = []
    
    for (let i =0; i<arr.length; i++){
      if (arr[i] == 97){
        newArr.push('a')
      } else if (arr[i] == 101){
        newArr.push('e')
      } else if (arr[i] == 105){
        newArr.push('i')
      } else if (arr[i] == 111){
        newArr.push('o')
      } else if (arr[i] == 117){
        newArr.push('u')
      } else {
        newArr.push(arr[i])
      }
    }
    
    return newArr
  
  }

//   Refactored

  function isVow(a){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
     return a.map(e => vowels.includes(String.fromCharCode(e)) ? String.fromCharCode(e) : e)
    }