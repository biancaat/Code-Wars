// P: array of number
// R: lowest integer to be made with array of numbers with out repeating any numbers
// E: [1,2,5,3,5,7,9,2] => 123579
// P: create a sorted array of the argument, create an empty array, for loop to remove duplicated numbers, return the new array with duplicates removed as one number


function minValue(values){
    let arr = values.sort((a,b) => a-b)
    let remove = []
    
    for (let i =0; i< values.length; i++){
      if (arr[i] !== arr[i+1]){
        remove.push(arr[i])
      }
    }
  
    return Number(remove.join(''))
  }