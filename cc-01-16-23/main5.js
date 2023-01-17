
function toCamelCase(str){
  if (str == '' ){
    return ''
  }
    let gap =  str.includes('-') ? str.split('-') : str.split('_')
    
    let lowerCase = gap[0][0]
    
    let upperCase = gap.map((e,i,a) => e[0].toUpperCase() + e.slice(1))
    
    
    for (let i =0; i<gap.length; i++){
      if (gap[0][0] == gap[0][0].toUpperCase()){
       return upperCase.join('')
      } else {
        return`${lowerCase}${gap[0].slice(1)}${upperCase.slice(1).join('')}`
      }
    
    }
}