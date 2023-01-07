// P: array of strings
// R: an new array containing the number of characters in each string element whos position is == to the position of the alphabet
// E: ['abc', 'dbc','a'] => [3,2,1]
// P: loop through each array string and loop through each strings characters, if the position of the character == position in the alphabet, increment the count, push the count value into a new array and return the new array

function solve(arr){  
	let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  
  let final = []
  
  // loop through all elements of array
  for (let i = 0; i<arr.length; i++){
    // initialize counter
    let count = 0
    	// 2nd loop, to loop through each string
    	for (let j = 0; j < arr[i].length; j++){
        // does the letter in each array element == its position in the alphabet?
        if (arr[i][j] == alphabet[j]){
          count++
        }
      }
    // push the number of letter that == position in alphabet into new array
    final.push(count)
  }
  return final
};

solve(['a','abc','abc','abc'])
