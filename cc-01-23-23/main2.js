// P: array of strings
// R: the array sorted from smallest string length to largest
// E: ['help','me','please'] => ['me','help','please']
// P: use the sort method to sort the array based on string length

function sortByLength (array) {
  
    return array.sort((a,b) => a.length-b.length)
    };