// P: number
// R: concatanated number
// E: squareDigits(3212), 9414
// P: turn number into string, split string into array. map through each element and square each element, join the array into a string and return the number

function squareDigits (num){
    return Number(num.toString().split('').map(x => x**2).join(''))
}