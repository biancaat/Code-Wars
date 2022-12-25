// P: a string that contains characters
// R: if the character is unique return ')' else return '()'
// E: "Success" => ')())())'
// P: convert string to lowercase, push the letters that appear more than once into a new array, take that array and make it consist of only unique characters, loop through the argument and if the new duplicates array contains the element return ')' : '('

function duplicateEncode(word){
    word = word.toLowerCase()
    let duplicates = []
    
   word.split('').sort().forEach((e,i,a) => {
     a[i] == a[i+1] ? duplicates.push(e) : e
   })
    
    duplicates = [...new Set(duplicates)]
    
    return word.split('').map((e,i,a) => 
      duplicates.includes(e) ? ')':'(').join('')
    
      
  }