// P: number
// R: string of 1's and 0's that are the length of the parameter, string must start with 1
// E: 4 => '1010'
// P: create array, for loop, add 1 to array if # % 2 ==0 and 1 if # % 2 !== 0, return the string of the array

function stringy(size) {
    let arr = []
    
    for (let i = 0; i< size; i++){
      if (i % 2 == 0){
        arr.push(1)
      } else{
        arr.push(0)
      }
    }
    return arr.join('')
  }