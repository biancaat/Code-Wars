// P: string
// R: string with alternating case
// E: 'hElLo' => HeLlO
// P: turn string to array, map through and change the case

function alternating (str){
    return str.split('').map(x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('')
  }
  