// P: string and array of numbers
// R: sorted array
// E: R [2,9,7,1] => [1,2,7,9] 
// P:

const flip=(d, a)=>{
    return d == 'R' ? a.sort((a,b) => a-b) : a.sort((a,b)=> b-a)
  }