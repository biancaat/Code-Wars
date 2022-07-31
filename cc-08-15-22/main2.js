// P: string and letter
// R: number times the letter in found in the string
// E: 'hello', 'l' => 2
// P: create a counter, loop though the sting word and add to the counter every time the target letter in encountered

function strCount(str, letter){  
    let tally = 0
      let arr = str.split('')
    
    for (let i = 0; i<= arr.length; i++){
      if (arr[i] === letter){
        tally++
      }
    }
    return tally
    
  }
  