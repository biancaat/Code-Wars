// P:
// R: Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.
// E: (-12, 2, -6)  ->  true (-12, 2, -5)  ->  false
// P: if numner % a and b === 0 return true

function isDivideBy(number, a, b) {
    return number % a === 0 && number % b === 0 ? true : false;
  }