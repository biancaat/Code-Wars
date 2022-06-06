// P: array
// R: every second array element
// E: removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']
// P: apply filter on array and remove every second element

function removeEveryOther(arr){
    return arr.filter((e,i,a) => i % 2 === 0 )
  }