// P: numbers
// R: array of numbers
// E: (2,11) => [2,4,6,8,10]
// P: increment a number starting at the first param and by the first param and push to an array where max is the second parameter

function findMultiples(integer, limit) {
	let arr = []
  
  for (let i = integer; i<= limit; i += integer){
    arr.push(i)
  }

  return arr
}
