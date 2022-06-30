// P: array of numbers
// R: the middle of the number arranged in value from lowest to highest, index number
// E: [4,2,9] => 0
// P: HOT GARBAGE


function gimme (triplet) {
    return triplet[0] > triplet[1] && triplet[0] < triplet[2] || triplet[0] < triplet[1] && triplet[0] > triplet[2] ? triplet.indexOf(triplet[0]) :  triplet[1] > triplet[0] && triplet[1] < triplet[2] || triplet[1] < triplet[0] && triplet[1] > triplet[2] ? triplet.indexOf(triplet[1]) : triplet.indexOf(triplet[2]) 
  
  }