// P: string
// R: string in alphabetical order
// E: 'adnbc' => 'abcdn'
// P: turn string to array, use sort to make alphabetical order, then join array back to string

function sortGiftCode(code){
 
    return code.split('').sort().join('')
   }