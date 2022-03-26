// P: array of strings
// R: array of thrings that are equal to 4 letters
// E: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// P: return the original array filtered to only include strings with 4 letters

function friend(friends){
    return friends.filter(x => x.length === 4)
  }