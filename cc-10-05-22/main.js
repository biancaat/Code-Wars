// P: 2 strings
// R: a string in the folowing form 'short+reverseLong+short', where the shorter string is the prefix and suffic of the reversed lnger string if a and b are the same length, treat a as the longer string
// P: if a == || > b, return areverseba, else return breverseab

function shorter_reverse_longer(a,b){
    // declare variable to hold return string value
    let str = ''
    // declare variables to hold reverse of each string argument
    let reverseA = a.split('').reverse().join('')
    let reverseB = b.split('').reverse().join('')
    
    // if statement based on string length
    if (a.length >= b.length){
      str = `${b}${reverseA}${b}`
    } else {
      str = `${a}${reverseB}${a}`
    }
    // return the final string
    return str
  } 
  
  shorter_reverse_longer('cat','doggo')