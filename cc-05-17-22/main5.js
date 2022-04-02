// P: string of number 
// R: string of numbers
// E: highAndLow("1 2 3 4 5");  // return "5 1" highAndLow("1 2 -3 4 5"); // return "5 -3"
// P: turn string of numbers into an array, turn string into numbers and then sort the values from highest to lowest. return the first and last elements in the array concatenated

function highAndLow (numbers){
    let sortedArr = numbers.split(' ').map(x => x *1).sort((a,b) => a-b)
    return `${sortedArr[sortedArr.length -1]} ${sortedArr[0]}`
}