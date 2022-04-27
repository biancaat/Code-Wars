// P: if array enpty return 0
// R: Write a function which calculates the average of the numbers in a given list.
// E: find_average([1,1,1]), 1
// P: if array length = 0 return 0, else get sum and / by array index


// refactored
function find_average(array) {   
    return array.length === 0 ?  0 : array.reduce((a,c)=> a+c,0) / array.length
      }

      
 function find_average (array){   
  if (array.length === 0){
        return 0
      } else if (array.length > 0){
      return array.reduce((a,c)=> a+c,0) / array.length
        }

 }