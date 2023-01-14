// P: string
// R: the letter of the alphabet replaced with 1 if the letter in contained in argument and 0 if it is not
// E: abc => 111000000000000000000000
// P: loop through the alphabet, if the string contines the letter in the alphabet replace with 1 else 0


function change(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    // loop through alphabet array, if the input string includes the alphabet element, sub the letter with 1, if not sub the letter with 0
        return alphabet.split('').map((e,i,a) => string.toLowerCase().includes(e) ? 1:0).join('')
    }
    