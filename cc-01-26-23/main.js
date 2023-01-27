// P: an object
// R: the languages in the object that have a score that is greater or == to 60
// E: 
// P:push the object into a nested array, loop through arraya nd return the languages that are 60 or greater and in decending order


function myLanguages(results) {

    let sorted = []
    
    for (language in results){
      sorted.push([language, results[language]])
    }
    
    sorted = sorted.sort((a,b) => b[1]-a[1])
    return sorted.map((e,i,a) => e[1] >= 60 ? e[0] : null).filter(e => e != null)
  }