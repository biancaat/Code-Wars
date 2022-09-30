// P: two strings
// R: true if strings ASCII character code value are the same, flase if not. null is empty string, if string contains other characters than letters treat the string if it were empty. treat all letters as uppercase
// E: "AD", "BC"  -> true, "AD", "DD"  -> false
// P: if string null, empty or contains a character other than a letter sum is 0, loop through characters in string add the value of the character to the sum, if the character is not a letter let the sum = 0, compare the two sums if equal return true else return false

function compare(s1, s2) {
  // if strings are null their sum is treated as if strign was empty
  if (s1 == null){
    sum1 = 0
  }
    if (s2 == null){
    sum2 = 0
  }
  
  // treat all letters as uppercase
  s1 = s1.toUpperCase()
  s2 = s2.toUpperCase()
  
  // declare variable that will sold the string sums
  let sum1 = 0
  let sum2 = 0
  
  // loop through the string and determine if it is a letter or not, if not sum == 0 if letter add the value to the sum
  for (let i = 0 ; i < s1.length; i++){
    let num1 = s1.charCodeAt(i)
    
    if (num1 < 65 || num1 > 90){
      sum1 = 0
      // break to stop iteration and move to next element
      break;
    }
    sum1 += num1
  }
  
   // loop through the string and determine if it is a letter or not, if not sum == 0 if letter add the value to the sum
    for (let i = 0 ; i < s2.length; i++){
    let num2 = s2.charCodeAt(i)
    
    if (num2 < 65 || num2 > 90){
      sum2 = 0
      // break to stop iteration and move to next element
      break;
    }
    sum2 += num2
  }
  // Comepare the sums
return sum1 == sum2
}
