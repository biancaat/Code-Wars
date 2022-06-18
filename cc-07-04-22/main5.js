// P: string
// R: if more uppercase letters return sting in uppercase, if more lower case return string in lowercase
// E: 'CODe' => 'CODE'
// P: set up counter for upper and lower case letters. for loop, if element is uppercase, add to upper counter, if lower case add to lower counter. if upper counter greater than lower counter return sting in upercase, if lower counter greater than uppercase counter, return string in lower case

function solve(s){
    numberUpper = 0
  	numberLower = 0
  
  let arr = s.split('')
  
  arr.forEach(e => {if (e === e.toUpperCase()){
    return numberUpper += 1
  } else if (e === e.toLowerCase()){
    return numberLower += 1
  }})
  
  return numberUpper > numberLower ? s.toUpperCase() : s.toLowerCase()

}