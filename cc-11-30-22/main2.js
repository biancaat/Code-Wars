// P: number of buliding floor in american, postive negative whole
// R: number of buling floor in European, if number 0 or less than 0 return the number
// E: 15 => 13, 13 => 11, 1 => 0, 0 => 0
// P: if n < 13 return n -1, if n >13 return n -2 if n <= 0 return n

function getRealFloor(n) {
    return n <= 0 ? n : n < 13 ? n-1 : n-2
  }