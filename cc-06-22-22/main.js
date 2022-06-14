// P: number
// R: number that is the age of the father when he was or will be twice the age of the son
// E: twiceAsOld(36,7) , 22
// P: declare varibale for double the age of son, declare variable for the age of the father minus the age of the son, return the age 


function twiceAsOld(dadYearsOld, sonYearsOld) {
    let double = sonYearsOld * 2
    let age = dadYearsOld - double
    
    return age > 0 ? age : age < 0 ? age*-1 : 0
  
  }