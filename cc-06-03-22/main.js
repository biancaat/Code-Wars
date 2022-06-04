// P: array
// R: filtered array of only even numbers
// E: noOdds( [0,1,2,3] ), [0,2]
// P: filter though array, return array of only even numbers

function noOdds( values ){
    return values.filter(x => x % 2 === 0)
  }