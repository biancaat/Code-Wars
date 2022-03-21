// P: number
// R: the sum on the numbers less than the argument that are a multiple of 5 or 3, if the number is a multiple of 5 and 3, count the number once
// E: 10 => 23
// P: create variable for total, for loop and if statements, return total

function solution(number){
    total = 0
    for (let i = 0; i < number; i++){
      if (i % 3 && i % 5 == 0){
        total += i
      } else if (i % 3 == 0){
        total += i
      } else if (i % 5 == 0){
        total += i
      } else if (i === 0 || i < 0){
        total += 0
      }
    }
    return total
  }