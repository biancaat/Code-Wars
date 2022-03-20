// P: array of names
// R: 
// E: []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// P: return turnary

function likes(names) {
    return names.length == 0 ? 'No one likes this' : 
    names.length == 1 ? `${names[0]} likes this` : 
    names.length == 2 ? `${names[0]} and ${names[1]} likes this` : 
    names.length == 3 ? `${names[0]}, ${names[1]} and ${names[2]} likes this` : 
    `${names[0]}, ${names[1]} and ${names.length -2} likes this`
  }