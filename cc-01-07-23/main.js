// P: a string of letters
// R: the letters converted to their character code, then replace all 7's to 1's and return each individual total number added up and then the difference between the final numbers. 
// E: 'ABC' => 656667 => 656661 => (6+5+6+6+6+7)-(6+5+6+6+6+1) = 6
// P: loop through string and push the character value into a new string, loop though integer and replace 7 with 1, return the difference between the two numbers

function calc(x){
    let charConversion = []
    
      for (let i = 0; i<x.length; i++){
      charConversion.push(x.charCodeAt(i)) 
    }
    
  let total1 = charConversion.join('').split('').map(e => ++e).reduce((a,c) => a + c,0)
  
  let total2 = charConversion.join('').replaceAll('7','1').split('').map(e => ++e).reduce((a,c) => a + c, 0)
  
  return total1-total2
    
  }
  
  calc('aaaaaddddr')
  
  