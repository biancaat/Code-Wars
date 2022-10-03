// P: string of numbers
// R: filter out the lone 9's that have a 7 infront and behind them
// E: "79712312" => '7712312'
// P: loop through string if e ==9 and element before and after == 7, filter out the 9, splice used to remove or add element, slice return shallow copy of array

function sevenAte9(str) {
    let arr = str.split('')
    
    for (let i = 0; i<= arr.length; i++){
      if (arr[i] == '9' && arr[i-1] == '7' && arr[i+1] == '7'){
        arr.splice(i,1)
      }
    }
    return arr.join('')
    
  }