// P: string
// R: remove the "!"
// E: ("Hello World!"), "Hello World")
// P: turn parameter into array. filter through array. join array


  function removeExclamationMarks(s) {
    return s.split('').filter(a => a !== '!').join('')
  }