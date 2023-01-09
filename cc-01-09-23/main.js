// P: a string 
// R: the index of the vowel that is missing
// E: 'ABCEIO' => 4
// P: filter the non vowels from the string, create a unique array from the fitered array, return the index of the vowel that is not present in the unique array

function absentVowel(x){
    let vowels = 'aeiou'
    
    // filter the arguments string to only include the vowels
    let filtered = x.split('').filter((e,i,a) => vowels.includes(e))
    
    // from that new array, make sure that every character is unique and in alphabetical order
    let unique = [...new Set(filtered)].sort()
    
    // if the unique array does not contain a vowel, return the index of that vowel from the vowel array
    for (let i = 0; i< vowels.length; i++){
      if (!unique.includes(vowels[i])){
        return vowels.indexOf(vowels[i])
      }
    }
    
  }
  
