// P: array of objects
// R: boolean true if language: 'Ruby' is present
// E: list1 = [
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } ] => true

// P: loop through array of objects, if key of language == 'Ruby' return true else false

function isRubyComing(list) {
    return list.map(x =>x.language).indexOf('Ruby') != -1 ? true :false
  }