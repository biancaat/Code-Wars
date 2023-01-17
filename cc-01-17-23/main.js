// P: a string that contains dashhes and underscores
// R: the string with the dashes and underscores replced with camel casing. if the first letter is capitalized leave it
// E: 'the_pippi-is-savage' => 'thePippiIsSavage'
// 'The_pippi-is-savage' => 'ThePippiIsSavage'
// P: if string is empty return empty string, replace all dashes and underscores with empty space and turn string into array, isolate the first character in string, if first letter is capital, loop through each element and convert the first carachter to captial and join the string, if the first letter is lowercase, loop through the array and capitalize each first character, reomve the very first character and replace it with the lowercase variable

function toCamelCase(str){
    if (str == '' ){
      return ''
    }
    
    let gap = str.replaceAll('_', ' ').replaceAll('-',' ').split(' ')
    
    let lowerCase = str.split('')[0]
    
       if (gap[0][0] == gap[0][0].toUpperCase()){
         return gap.map((e,i,a) => `${e[0].toUpperCase()}${e.slice(1)}`).join('')
       } else {
         return`${lowerCase}${gap.map((e,i,a) => `${e[0].toUpperCase()}${e.slice(1)}`).join('').slice(1)}`
       }
  
  
  }