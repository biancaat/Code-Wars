// P: string
// R: string with 5 converted to 'S', 1 converted to 'I' and 0 converted to 'O'
// E: 'L0nd0n' => LOndOn
// P: map through string if element == 5 replace with s, 1 with i and 0 with o, return the converted string

function correct(string) {
	let arr = string.split('')
  let newStr = []
  
  
  for (let i = 0; i<arr.length; i++){
    if (arr[i] === '5'){
      newStr.push('S')
    } else if (arr[i] === '0'){
      newStr.push('O')
    } else if (arr[i] === '1'){
      newStr.push('I')
    } else {
      newStr.push(arr[i])
    }
  }
  
  return newStr.join('')

}