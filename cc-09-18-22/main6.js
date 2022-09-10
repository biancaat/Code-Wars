// P: string 
// R: the string with spaces inbetween
// E: "hello world" => "h e l l o  w o r l d"
// P: turn string into array, loop through and add a space to each element, return the string

function spacify(str) {
    return str.split('').map((e,i,a) => e+' ').join('').split('').slice(0,-1).join('')
  }
  
//   Refactored

  function spacify(str) {
    return str.split('').join(' ')
  }

  function findDeletedNumber(arr, mixArr) {
    let newArr = mixArr.sort()
    
    for (let i =0; i<= newArr.length; i++){
      if (newArr[i]+1 == newArr[i+1]){
        return 0
      } else (newArr[i]+1 < newArr[i+1]);{
        return newArr[i]+1
      }
    }
    
  }