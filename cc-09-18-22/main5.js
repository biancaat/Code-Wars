// P: string and array of numbers
// R: with each iteration remove the letter that corresponds with the number in the array
// E: 'kbc', [0,1] => 'b'
// P: turn letters into array, 2 for loops nested, for each letter in array remove the element at the index of the coords array

function lastSurvivor(letters, coords) {
	let arr = letters.split('')
  
  for (let i = 0; i< arr.length; i++){
    for (let i =0 ; i< coords.length; i++){
      arr.splice(coords[i],1)
    }
  }
  return arr[0]
}