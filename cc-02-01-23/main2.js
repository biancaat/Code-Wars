function divCon(x){
  
    let int = []
    let str = []
    
    for (let i = 0; i< x.length; i++){
      if (x[i].toString() === x[i]){
        str.push(x[i])
      } else{
        int.push(x[i])
      }
    }
    
    return int.reduce((a,c) => a + c,0) - str.map(e => e++).reduce((a,c) => a + c, 0) 
  
  }