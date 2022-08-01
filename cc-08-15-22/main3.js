// P: array of strings
// R: word that comes first in the alphabet will all letters in the word sperated by ***
// E: [car,zoo,ace]=> a***c***e
// P: sort the array return the first element with all letters sperated by ***

function twoSort(s) {
    return s.sort()[0].split('').join('***')
  
  }
  