// P: string
// R: 'Hello String!'
// E: greet('BILLY'), "Hello Billy!"
// P:  capitalize first letter, string to array, first element to upper case, return greeting with argument 


var greet = function(name) {
    let cap = name.split('').map((e,i,a) => i === 0 ? e.toString().toUpperCase() : e.toString().toLowerCase()).join('')
    
    return `Hello ${cap}!`
  
  };