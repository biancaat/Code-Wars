// P: booleans
// R: true if one param = false and one = true, false if both false or both true
// E: false, false => false, true, false => true
// P: if both false or true return false, else return true

function xor(a, b) {
    return a === true && b === false ? true : a === false && b === true ? true : false 
  }