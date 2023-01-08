// P: a string of characters
// R: all the vowels replced to 1, and all other characters replced with 0
// E: 'ABC' => '100'
// P: loop through string, if element is a vowel replce with 1 else replace with 0

function vowelOne(s){
    let vowels = 'aeiou'
    let binary = ''
    s = s.toLowerCase()
    
    for (let i = 0; i<s.length; i++){
      if (vowels.includes(s[i])){
        binary +=1
      } else{
        binary +=0
      }
    }
    return binary
  }
  
  vowelOne("Aeiou, abc")