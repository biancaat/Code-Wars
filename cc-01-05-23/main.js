// P: string that will either contain or not contain the following sub string 'three fifty' || 'tree fiddy' || '3.50'
// R: return true if the string contains the sub string, and false if not
// E: 'that will be 3.50' => true, 'the lochness is that way' => false
// P: if string includes substring return ture, if not return false

function isLockNessMonster(s) {
    return s.includes('3.50')|| s.includes('three fifty') || s.includes('tree fiddy') 
  }