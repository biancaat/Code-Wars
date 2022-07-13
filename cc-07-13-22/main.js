// P: string
// R: length on the longest word in the string as a number
// E: 'hello my name is' => 5
// P: turn string into array, map through array and turn each word into a length in number, sort the array and return the element with the highest value

function findLongest(str) {
    return str.split(' ').map(e => e.length).sort((a,b) => b-a)[0]
   
   }