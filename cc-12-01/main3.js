// P: number value for exam grade and number value for amoutn of projects completed
// R: number final grade, 100 if exam is more than 90 and projects more than 10, 90 exam is more than 75 and projects is minimum 5, 75 if exam is more than 50 and the projects minumum 2, 0 if other
// E: 91, 11 => 100 ; 74, 3 => 75
// P:if else statement, return the final exam grade

function finalGrade (exam, projects) {
    if (exam > 90 || projects >10){
      return 100
    } else if(exam > 75 && projects >=5){
      return 90
    } else if (exam > 50 && projects >=2){
      return 75
    }else {
      return 0
    }
  }