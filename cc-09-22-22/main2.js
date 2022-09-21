// P: array of strings
// R: array of strings with the word rotten removed, in lowercase, if array is empty return empty array
// E: ["apple","rottenBanana","apple"] => ["apple","banana","apple"]
// P: loop through array if rotten is in the element remove it if not return the element 

function removeRotten(bagOfFruits){
    return bagOfFruits == [] || bagOfFruits == null ? [] : bagOfFruits.map(x => x.includes('rotten') ? x.slice(6).toLowerCase() : x.toLowerCase())
  
  }