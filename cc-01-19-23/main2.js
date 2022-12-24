// P: a number
// R: return a string that contains all the numbers added together to == the argument
// E: 203 => '200 + 3'
//P: turn the numer to a string, loop through the string and add the needed amout of '0', push that number to a new array, loop through that array and if the index of the element is not the last index add a '+', return as a string

function expandedForm(num) {
    num = num.toString()
    let str = []
    
    for (let i = 0; i<num.length; i++){
      if (num[i] != '0'){
      str.push(num[i] + '0'.repeat(num.length -i -1))
      }
    }
    
    return str.map((e,i,a) => i != a.length -1 ? `${e} + ` : e).join('')
  }
