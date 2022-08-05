// P: string
// R: return true if pallindrome, false if not
// E: hello => false , kayak => true
// P: turn string to lower case and reverse sequence, if new sting === old string true if not then false

function isPalindrome(x) {
    let pall = x.split('').reverse().join('').toLowerCase()
    
    if (x.toLowerCase() === pall){
      return true
    } else{
      return false
    }
  }