// P: number
// R: if number > 0, the sum of all numbers that comprose the paramter and what they equal, if number < 0, number<0, if number = 0, 0=0
// E: 7 => "0+1+2+3+4+5+6+7 = 28" 0 => '0=0' -15 => '-15<0'
// P: create an empty array, create an if else statement, if number > 0, for loop through each number starting at 0 and push to empty array, join the array as a string and make the equation equal to the sum of all elements in the array, if number < 0 return 'number<0' and else if number =0 return 'number=0'

function sequenceSum(num) {
    let arr = []
    if (num >0){
      for (let i =0; i<=num; i++){
        arr.push(i)
      }
        return `${arr.join('+')}=${arr.reduce((a,c) => a+c)}`
    } else if (num<0){
      return `${num}<0`
    }else{
      return `${num}=0`
    }
  
  }