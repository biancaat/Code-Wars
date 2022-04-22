// P:
// R: Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since midnight in milliseconds.
// E: h = 0 m = 1 s = 1 result = 61000
// P: multiply each time elemnt by its value in miliseconds. add them together and return the sum

function past(h, m, s){
    return 1000 * (h*3600 + m*60 + s);
  }