// P: string
// R: string of numbers
// E: s="aaabbbbhaijjjm" printer_error(s) => "0/14"
// s="aaaxbbbbyyhwawiwjjjwwm" printer_error(s) => "8/22"
// P: turn the string into an array. create a counter for the amount ot letters in the string and a counter for the amount of errors. use for loop and condition to sort through error letter, add to error count. return number of errors as numerator and number of letters as denominator

function printerError (s){
    // turn the string into an array. 
    let arr = s.split('')
    // create a counter for the amount ot letters in the string and a counter for the amount of errors. 
    let numerator = 0
    let denominator = arr.length
    // use for loop and condition to sort through error letter, add to error count. 
    for (let i = 0; i<= arr.length; i++){
        if (arr[i] === 'n' || arr[i] === 'o' || arr[i] === 'p' || arr[i] === 'q' || arr[i] === 'r' || arr[i] === 's' || arr[i] === 't' || arr[i] === 'u' || arr[i] === 'v' || arr[i] === 'w' || arr[i] === 'x' || arr[i] === 'y' || arr[i] === 'z'){
            numerator += 1
          }
    }
    // return number of errors as numerator and number of letters as denominator

    return `${numerator}/${denominator}`
}
