// P: string
// R: return a nickname, if the 3rd letter is a vowel, return the first 4 letters of the word, if the 3rd letter is a consanant return the first 3 letters of the name, if the name is 3 letters or less return error
// E:jen => error, jenny => jen, jeanine => jean
// P: if index 2 of string is a vowel, return the first 4 letters of the string, if index 2 is a consanant return the first 3 letters of the string, if the string is 3 letters or less return error


function nicknameGenerator(name){
    let vowels = 'aeiou'
    
    if (name.length <= 3){
      return 'Error: Name too short'
    } else if (vowels.includes(name[2])) {
      return name.slice(0,4)
    } else {
      return name.slice(0,3)
    }
  }