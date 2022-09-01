// P: string of numbers
// R: string of numbers repeated but the value of the number
// E: 123 => 122333
// P: map through string and repeat the element by its number value

function explode(s) {
    return s.toString().split('').map(e => e.repeat(Number(e))).join('')
     
   }