// P: string
// R: string with vowels replced with position number in string 
// E: 'this is my string' == 'th3s 6s my str15ng'
// P: loop through string if element == vowel, replce elemnt with index +1

function vowel2index(str) {
    str = str.split('')
    let arr = []
    
    for (let i =0; i<str.length; i++){
      if ('aeiouAEIOU'.includes(str[i])){
        arr.push(i+1)
      }else{
        arr.push(str[i])
      }
    }
    return arr.join('')
  }
  
  vowel2index('Tomorrow is going to be raining')