// P: string and number
// R: sting repeated n times
// E: 'b',5 => 'bbbbb'
// P: create empty array, loop through and push string paramter into array n times. return the joined array

function repeater(string, n){
    let arr = []
    
    for (let i =0; i< n; i++){
      arr.push(string)
    }
    return arr.join('')
    
  }
  