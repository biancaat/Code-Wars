//6KYU
// P: a string that contains characters
// R: return the the number of characters that are duplicated, case does not count
// E: 'Indivisibilities' => 2
// P: convert string to lowercase and sort in alphabetical order, loop through the string and if the current element is the same as the next push that element into a new array, find how many characters are unique in that array and return the size

function duplicateCount(text){
    text = text.toLowerCase().split('').sort().join('')
    
    let arr = []
    
      for (let i = 0; i< text.length; i++){
      if (text[i] == text[i+1]){
        arr.push(text[i])
      }
    }
    
    return new Set(arr).size
  }