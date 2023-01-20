// P: a string
// R: return a 'mexican wave' of the string 
// E: 'hello' => ['Hello','hEllo','heLlo', 'helLo', 'hellO']
//P: loop through the sting, replce letter for a capitalized letter and push into a new array, return the array

function wave(str){
    !str.length ? '' : str 
    let newWave = []
    
    for (let i = 0; i< str.length; i++){
      newWave.push(str.replace(str[i],str[i].toUpperCase()))
    }
    return newWave
  }
  