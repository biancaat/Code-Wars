// P: string
// R: number
// E: '4 years old' => 4
// P: turn string into array return the first element as a number

function getAge(inputString){
	return Number(inputString.split(' ')[0])
}
