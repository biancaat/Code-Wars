// P: array of arrays
// R: array
// E: openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior']
// P: create an empty array placeholder, loop through the argument, if the condition is met, place the value in the empty array

function openOrSenior (score){
    let arr = []
    for (let i = 0; i< score.length; i++){
        if (score[i][0] >= 55 && score [i][1] > 7){
            arr.push('Senior')
        } else {
            arr.push('Open')
        }
    }
  return arr
}

// Refactored

function openOrSenior(data){
    return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open')
  }