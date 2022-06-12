// P: string and array of string
// R: string
// E: sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'), 'Hello, John Smith! Welcome to Phoenix, Arizona!'
// P: take array and join with space in middle, return scentence poputated with joined array and other arguments. 

function sayHello( name, city, state ) {
    let joined = name.join(' ')
    return `Hello, ${joined}! Welcome to ${city}, ${state}!`
  }11