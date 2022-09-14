// P: array of numbers
// R: number that is duplicated
// E: [1,2,7,6,3,2] => 2
// P: sort the array, loop through, if current element == next element, return the current element

function findDup( arr ){
	return arr.filter((e,i,a) => a.indexOf(e) !== i)[0]
}