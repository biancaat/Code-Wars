// P: number
// R: array that contains number from 1 -n, numbers / 3 === fizz, numbers /5 === buzz, number / 3&5 === fizzbuzz
// E: [1,2,fizz,4,buzz]
// P:


function fizzbuzz(n){
    let arr = []
    
    for (let i = 1; i <= n; i++){
      if (i % 3 === 0 && i % 5 === 0){
        arr.push('FizzBuzz')
      } else if (i % 3 === 0){
        arr.push('Fizz')
      } else if (i % 5 === 0){
        arr.push('Buzz')
      } else {
        arr.push(i)
      }
    }
    return arr
  }