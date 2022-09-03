// P: string
// R: index of all letters in the string that are capitalized
// E: HeLP => [0,2,3]
// P: turn string to array, loop through if letter is capital return its index in an array

var capitals = function (word) {
	return word.split('').map( function (e,i,a) { return e == e.toUpperCase() ? i : e}).filter((e,i,a) => e == Number(e))
};