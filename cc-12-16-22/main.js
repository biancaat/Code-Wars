// P: two numbers, whole
// R: return the sum of the numbers in binary as a string
// 5,9 => 1110
// add the integers, convert to string with radix 2 as parameter to get binary value

function addBinary(a,b) {
	return (a+b).toString(2)
}

addBinary(5,9)
