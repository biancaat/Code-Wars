// P: array of numbers
// R: string, if array is in ascending order => 'yes, ascending', if descending order => 'yes, descending', if neither => 'no'
// E: [1,2,3] => 'yes, ascending'
// P: for loop, if else if:

function isSortedAndHow(array) {
	for (let i = 0; i<array.length; i++){
	if (array[i] < array[i + 1]){
		return 'yes, ascending'
	} else if  (array[i] > array[i + 1] && array[i+1] >= array[i+2]){
		return 'yes, descending'
	} else {
		return 'no'
	}
	} 
  
  
}