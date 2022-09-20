// P: array of numbers
// R: sum of numbers where even indecies are multiplied by the last element in the index, if index is empty return 0
// E: [2, 3, 4, 5]] => 30
// P: loop through array and filter out even indecies. reduce the array by multiplying all elements by the last element in the index. return the sum.

function evenLast(numbers) {
	if (numbers == null || numbers == [] || numbers == 0){
    return 0
  } else {
  	return numbers.map((e,i,a) => e * a[a.length-1]).filter((e,i,a) => i % 2 == 0).reduce((a,b) => a+b)
  }
}