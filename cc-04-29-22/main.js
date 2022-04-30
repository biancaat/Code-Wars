// P:
// R: Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.
// E: [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
// P: sort the array from lowest to highest and choose the first index, then do the opposite for the second function

function min (list){
    return list.sort((a,b) => a-b)[0]
  }
  
  function max (list){
    return list.sort((a,b) => b-a)[0]
  }