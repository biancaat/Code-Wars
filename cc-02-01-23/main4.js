function getMissingElement(superImportantArray){
    let sorted = superImportantArray.sort((a,b) => a-b)
    
    for (let i = 0; i < sorted.length-1; i++){
      if (!sorted.includes(0)){
        return 0
      }else if (sorted[i] +1 != sorted[i +1] ){
      return sorted[i] + 1
    }}
   
  }
  