// P: array
// R: string
// E: oddOrEven([1023, 1, 2]), 'even'
// P: reduce values in array, if sum even, return 'even' else return 'odd'

function offOrEven (array){
    return array.reduce((a,c) => a+c,0) % 2 === 0 ? 'Even' : 'Odd'
}