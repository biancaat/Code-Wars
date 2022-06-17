// P: array of numbers
// R: array of even numbers only
// E: [1,2,3,4,5,6] => [2,4,6]
// P: use filter array method

function getEvenNumbers(numbersArray){
    return numbersArray.filter(e => e % 2 === 0)
  }