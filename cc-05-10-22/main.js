// P:
// R: Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// E: summation(2) -> 3 (1 + 2)
// P: create a counter. loop through the number and get the sum. add it to the counter

function countIt (num) {
    let arr = 0
    for (let i = 1 ; i<= num; i++){
      arr = arr + i
    }
    return arr
  }