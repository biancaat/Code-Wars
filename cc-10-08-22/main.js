// P: string
// R: true if all characters in string are unique false if not
// E: 'abcdefg' => true, 'abcdefga' => false
// P: loop through string, if index of element == the indexOf element return true else return false

function hasUniqueChars(str){
    // every loops through array and makes sure that every element meets the condition, returns a boolean. indexOf returns the index number of the element where it is first seen in the array. if the character is unique the indexOf should match the actual index of the element
    let arr = str.split('').every((e,i,a) => i == a.indexOf(e))
    
    return arr
    
  }
  
  hasUniqueChars('bBb')