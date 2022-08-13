// P: array of numbers
// R: numbers printed incremently by 1 from smallest number to largest
// E: [3,4,7,9] => [3,4,5,6,7,8,9]
// P:

function pipeFix(numbers){
	let arr = numbers.sort((a,b)=> a-b)
  
  let newArr = []
  
  for (let i = arr[0]; i<= arr[arr.length -1]; i++){
    newArr.push(i)
  }
    return newArr
    
}