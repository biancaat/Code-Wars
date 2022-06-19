// P: 2 arrays
// R: if the answer is right +4 points, wring -1point, blank = 0 points, return score, if score < 0, return 0
// E: checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// P: create score variable, for loop to loop through array, parameters, return score




function checkExam(array1, array2) {
    let score = 0
    
    for (let i = 0; i< array1.length; i++){
        if (array1[i] === array2[i]){
            score += 4
            } else if (array2[i] === ''){
              score += 0
            }else if (array1[i] !== array2[i]){
              score -=  1
            } 
      }
      return score < 0 ? 0 : score
    
 

}