// P: array of string names
// R: array of string names with first letter capitalized and remaining letters lower case
// E:['BIANCA', 'brandon'] => ['Bianca', 'Brandon']
// P: loop through array, capitalize first letter, lowercase remaining letters join and return the array

function capMe(names) {
    return names.map(e => e.split('')[0].toUpperCase()+e.slice(1).toLowerCase())
   }