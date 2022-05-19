// P: string
// R: string with every first letter of ever word in uppercase
// E: Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
// P: turn string into array. Map through array and replace every first letter of every word with that letter as an uppercase. Turn array back into string return

function toJadenString (str){
    return str.split(' ').map(x => x.replace(x[0], x[0].toUpperCase())).join(' ')
}