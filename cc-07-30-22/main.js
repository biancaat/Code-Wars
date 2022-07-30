// P: array of numbers
// R: number with the longest digit, if more than one number that has longest digit return the first number
// E: [1,23,456] => 456
// P: loop through array and compare string length, return element with longest string in number form

function longest (array){
    // template literals turn the parameters into strings, returning b and a inthe turnary return the element as a number
    return array.reduce((a,b) => `${b}`.length > `${a}`.length ? b : a)
}