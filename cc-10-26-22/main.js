// P: string
// R: return the string will all the vowels removed
// E: 'hello' => 'hll'
// P: create array of vowels, if string contains the vowels filter those letters out


function shortcut (string) {
    let vowels = ["a","e","i","o","u"]
    
    return string.split('').filter((e,i,a) => !vowels.includes(e)).join('')
  }
  
  shortcut('hello')