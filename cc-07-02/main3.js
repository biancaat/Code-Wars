// P: array of numbers
// R: boolean of true if ascending order, false if not 
// E: [1, 2, 4, 7, 19]), 'The list of numbers "1, 2, 4, 7, 19" is in ascending order'
// P: 


// Refactored

function inAscOrder(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++){
      if (arr[i] > arr[i+1]){
        return false
      } 
    }
    return true
  }

  function inAscOrder(arr) {
    return arr.join('') === arr.sort((a,b)=> a-b ).join('')
  }
  
//   original

  function inAscOrder(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++){
      if (arr[i] < arr[i+1]){
        newArr.push(true)
      } 
    }
    return newArr.length === arr.length -1 ? true : false
  }
  
