// P: numbers
// R: number rounded down to nearest integer
// E: 
// P:

function dutyFree(normPrice, discount, hol){
    return Math.floor(hol / (normPrice * (discount/100)))
  
  }
  