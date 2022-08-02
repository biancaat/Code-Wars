// P: string
// R: word with first letter capitalized
// E: word => Word
// P: captialize first letter and combine it with the rest of the word

function capitalizeWord(word) {
    let newWord = word.slice(1)
    let cap = word[0].toUpperCase()
    
    return `${cap}${newWord}`
  }