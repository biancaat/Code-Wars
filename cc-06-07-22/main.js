// P: string
// R: string with each letter doubled
// E: hello => hheelllloo
// P: turn string to array, map through and add extra letter, join array back into string

function doubleChar(str) {
    return str.split('').map(x => x+x).join('')
  }