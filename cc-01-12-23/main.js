// P: string
// R: capitalize the vowels in the string
// E: 'Hello World' => 'HEllOw WOrld'
// P: loop through string, if element is vowel, capitalize, return the new string


function swap (string) {
    let vowels = 'aeiou'
    
    return string.split('').map((e,i,a) => 
      vowels.includes(e) ? e.toUpperCase() : e
    ).join('')
  }