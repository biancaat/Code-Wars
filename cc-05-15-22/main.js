// P: numbers
// R: return a letter grade based on a numerical grade average
// E: (getGrade(70,70,70), 'C'
// P: create variabel that contains the average of the parameters. turnary operator to determine what letter grade coreesponds to the numerical average 

function getGrade (s1, s2, s3) {
    let average = (s1+s2+s3)/3
    return average < 60 ? 'F' : average < 70 ? 'D' : average < 80 ? 'C': average < 90 ? 'B':'A'    
  }