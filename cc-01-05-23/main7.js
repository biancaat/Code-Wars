
function uefaEuro2016(teams, scores){
    let winner = scores.indexOf(Math.max(...scores))
    
    return scores[0] == scores[1] ? `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    : `At match ${teams[0]} - ${teams[1]}, ${teams[winner]} won!`
  }