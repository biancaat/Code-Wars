// P: a string
// R: the odd and even indexs of the string grouped spearately as a string, 0 is an even index
// E: 'CodeWars' => 'CdWr oeas'
// P: loop through string if index even put in one array if odd another join the arrays and return the new string

function sortMyString(s) {
    let even =[]
    let odd = []
    
    let sortedArr = s.split('').map((e,i,a) => i % 2 == 0 ? even.push(e) : odd.push(e))
    
    return `${even.join('')} ${odd.join('')}`
  }