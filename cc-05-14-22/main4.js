// P: array of numbers. if array empty or = null/undefined return 0
// R: remove highest and lowest integer then sum the remaining
// E: sumArray([ 6, 2, 1, 8, 10 ]), 16 )
// P: sort array from lowest to higest. shift and pop first and last element. reduce the remanining integers. if array is empty undefined/null return 0

function sumArray(array) {
    // if array is null or undefined 
    if (array === null || array === undefined){
      return 0
    } else{
        // sort the array
   let newArr = array.sort((a,b) => a-b)
//    remove last element in sorted array
   let removeLast = newArr.pop()
//    remove first element in sorted array
   let removeFirst = newArr.shift()
//    return and add the remaining elements
    return array.reduce((a,c) => a+c,0)
 }
  }