// P: 2 strings
// R: boolean
// E: 'fox' 'x' => true
// P: 

function correctTail(bod, tail) {
  
    let sub = bod.split('')[bod.length -1]
    
    if (sub === tail){
      return true
    }
    else{ 
      return false
    }
  }