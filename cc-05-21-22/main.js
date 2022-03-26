// P: string of numbers
// R: string
// E: "4556364607935616" --> "############5616"
// P: turn string into array. take last 4 characters and store them sepratley. loop though the remaining string and replace each character with #. return the original stored characters and the # characters as one string


function maskify(cc){
    // create new variable to hold masked number
    let maskedCC = ''
   
    // turn string into array. 
    let arr = cc.split('')
    
    // take last 4 characters and store them sepratley. 
    let lastFour = arr.slice(-4).join('')

    // loop though the remaining string and replace each character with #. 
    for (let i = 0; i<= arr.length - 5; i++){
        maskedCC += '#'
    }
    // return the original stored characters and the # characters as one string
    return `${maskedCC}${lastFour}`

}