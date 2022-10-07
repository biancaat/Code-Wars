// P: string
// R: longest substring of vowels
// E: 'codewarriors' => o,e,a,io => 2
// P: loop through string, if element is a vowel add to the counter and set another variable equal to the counter, if the element is not a vowel reset the counter to 0. return the max of the counter

function solve(s){
    let arr = s.split('')
      let max = 0
    let curr = 0
    
    for (let i =0; i< arr.length; i++){
      // if string includes the element
      if ('aeiou'.includes(arr[i])){
        // add 1 to the count
        curr++
        // if count is greater than the max,
        if (curr > max){
          // max is equal to the current
          max = curr
        }
      // if 'aeiou' does not include arr[i], curr = 0. this resets the count when the next element in the iteration id not a vowel
      } else{
        curr = 0
      }
    }
    return max
  }