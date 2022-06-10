// P: array
// R: filtered array
// E: arrray cannot contain ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// P: create array of what we dont want. filter through the argumant and remove all elements that are present in the array of what we dont want 

function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
    return birds.filter(b => !geese.includes(b))
  };