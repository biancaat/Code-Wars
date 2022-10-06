// P: string
// R: an array of all the even indexed characters starting at index 1. if string < 2 || > 100 characters return 'invalid string'
// E: "abcdefghijklm" => ["b", "d", "f", "h", "j", "l"]
// P: if string length greater than 100 or less than 2 return 'invalid string'. else, loop through string and push odd indexed characters into an array. return the array. 

function evenChars(string) {
	if (string.length > 100 || string.length < 2){
    return 'invalid string'
  }
  
  return string.split('').filter((e,i,a) => i % 2 != 0)
  
}

evenChars('a')