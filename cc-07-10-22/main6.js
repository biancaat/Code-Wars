// P: array of numbers
// R: numbers as a string in the format of (xxx) xxx-xxxx
// E: [1,2,3,4,5,6,7,8,9,0] => (123) 456-7890
// P: 

function createPhoneNumber(numbers){
    let first = []
    for (let i = 0; i <3; i++){
      first.push(numbers[i])
    }
    
    let second = []
    for (let i = 3; i <6; i++){
      second.push(numbers[i])
    }
    
    let third = []
    for (let i = 6; i <10; i++){
      third.push(numbers[i])
    }
    
    return `(${first.join('')}) ${second.join('')}-${third.join('')}`
  }

//   Refactored

function createPhoneNumber(numbers){
    let format = '(xxx) xxx-xxxx'
    
    for (let i = 0; i<numbers.length; i++){
      format = format.replace('x',numbers[i])
    }
     return format
   }