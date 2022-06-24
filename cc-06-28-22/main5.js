// P: number
// R: number
// E: 7 => 3, return the number of odd positive values less than the given number
// P: Math.floor(n/2)


// This function takes up too much memory and is too complicated
function oddCount(n){
    let evenArr = []
    let arr = []
    for (let i = 0; i < n; i++){
      if (i % 2 !== 0) {
        arr.push(i)
      } else {
        evenArr.push(i)
      }
    }
    return arr.length
  }

  function oddCount(n){
      return Math.floor(n/2)
  }