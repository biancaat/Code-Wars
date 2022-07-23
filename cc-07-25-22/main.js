// P: number
// R: how many steps it takes to create a pallindrome
// E: 87 => 4
// P: create a function the takes the num parameter and reverses it. create a variable to hold how many steps until pallindrome. use while loop to add number plus reverse of number and count steps until num and reverse num equal each other

function palindromeChainLength (num){
    function reverseNum(num){
        return Number(num.toString().split('').reverse().join(''))
    }
    
    let steps = 0
   
    while (num != reverseNum(num)){
      num += reverseNum(num)
      steps +=1
    }
     return steps
     
    }