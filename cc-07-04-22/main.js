// P: string
// R: filtered string that is reversed
// E: 'he55o' => 'oeh'
// P: create empty array, turn sting into an array, loop though string array and if the elements equal letter of the alphabet, push them into empty array. return the array revered and joined. 


function reverseLetter(str) {
    let reverseStr = []
    let arr = str.split('')
    
    for (let i =0; i < arr.length; i++){
      if (arr[i] === 'a' || arr[i] === 'b' || arr[i] === 'c' || arr[i] === 'd' || arr[i] === 'e' || arr[i] === 'f' || arr[i] === 'g' || arr[i] === 'h' || arr[i] === 'i' || arr[i] === 'j' || arr[i] === 'k' || arr[i] === 'l' || arr[i] === 'm' || arr[i] === 'n' || arr[i] === 'o' || arr[i] === 'p' || arr[i] === 'q' || arr[i] === 'r' || arr[i] === 's' || arr[i] === 't' || arr[i] === 'u' || arr[i] === 'v' || arr[i] === 'w' || arr[i] === 'x' || arr[i] === 'y' || arr[i] === 'z'){
        reverseStr.push(arr[i])
      }
    }
    
    return reverseStr.reverse().join('')
    
    
  }