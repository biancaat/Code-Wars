// P: string
// R: inversed letters of string where a == b, b == a, and c == c
// E: abbac => baabc
// P: turnstring to array loop through and swap letter for its corresponding letter and return the new string

function switcheroo(x){
	let arr = x.split('')
  let newArr = []
  
  for (let i = 0 ; i< arr.length; i++){
    if (arr[i] == 'a'){
      newArr.push('b')
    } else if( arr[i] == 'b'){
      newArr.push('a')
    } else {
      newArr.push('c')
    }
  }
  return newArr.join('')
}