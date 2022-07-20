// P: string
// R: array with a number representing where the vowels are in the string 
// E: 'apple' => [1,5]
// P: 

function vowelIndices(word){

    let arr = word.split('')
    let emptyArr = []
    let count = 0
    for (let i = 0; i<arr.length; i++){
      count += 1
      if (arr[i] == 'a' || arr[i] == 'e' ||arr[i] == 'i' ||arr[i] == 'o' ||arr[i] == 'u' || arr[i] == 'y' || arr[i] == 'A' || arr[i] == 'E' ||arr[i] == 'I' ||arr[i] == 'O' ||arr[i] == 'U' || arr[i] == 'Y'){
        
        emptyArr.push(count)
      }
    }
    return emptyArr
  }