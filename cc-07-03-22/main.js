// P: array and number
// R: boolean
// E: smallEnough([66, 101], 200), true)
// P: for loop through array, if element is smaller than limit, return true else return false

function smallEnough(a, limit){
	for (let i = 0 ; i < a.length ; i++){
    if (a[i] > limit) {
      return false
    }
  }
  return true
}