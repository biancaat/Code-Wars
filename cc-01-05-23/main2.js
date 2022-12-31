// P: string name and price value as a number
// R: the amount it would cost to print each letter of the name including the spaces, each letter costs 30 unless there is another price parameter passed, do not use  * to determine the value
// E: "Werner Vígi" => 330, "Werner Vígi", 15 => 165
// P: loop though name string and push price of letter into new array, return the new array reduced to get the total price

function billboard(name, price){
    let arr = []
      for (let i = 0; i< name.length; i++){
      if (price){
        arr.push(price)
      } else {
        arr.push(30)
      }
    }
    return arr.reduce((a,c) => a + c, 0)
  } 