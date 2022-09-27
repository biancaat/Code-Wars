// P: array of numbers
// R: return the minumum value or the index of the minimum value
// E: min([5,4,2,3], 'value') ==> return (2) || min([5,4,2,3], 'index') ==> 2
// P: if 2nd param == value return min value in arr else return the index of the min value

function min(arr, toReturn) {
    return toReturn == "value" ? Math.min(...arr) : arr.indexOf(Math.min(...arr))
  }
  
  min([5,4,2,3,1], 'valu')
  