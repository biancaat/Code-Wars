// P: numbers
// R: number
// E: 65,60,75,55,60,63,64,45), 86
// P:

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  
    let arr = [age1,age2,age3,age4,age5,age6,age7,age8]
    
    return Math.floor(Math.sqrt(arr.map(e => e*e).reduce((a,c) => c +a ,0)) / 2)
    
  }
  