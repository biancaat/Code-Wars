// P: string
// R: array of sting with one array every even element capitalized and another ray with every odd element capitalized
// E: 'abcd' => ['AbCd', 'aBcD']
// P: turn string into array, create 2 variables that hold a map through, if index % 2 === 0, capitalize the element, do the same thing but for odd and store in second variable. return the variables in an array

function capitalize(s){
    let even = s.split('').map((e,i,a) => i % 2 === 0 ? e.toUpperCase() : e).join('')
    
     let odd = s.split('').map((e,i,a) => i % 2 !== 0 ? e.toUpperCase() : e).join('')
     
     return [even, odd]
  };