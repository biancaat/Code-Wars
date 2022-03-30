// P: number
// R: number
// E: Input: 42145 Output: 54421
// P: turn number into an array, sort array and return number

function descendingOrder(n){
    return +n.toString().split('').sort((a,b) => b-a).join('')
  }