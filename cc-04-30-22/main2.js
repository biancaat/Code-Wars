// P:
// R: You will be given an array a and a value x. All you need to do is check whether the provided array contains the value. Array can contain numbers or strings. X can be either.
// E: Return true if the array contains the value, false if not.
// P: use includes() array method to find element. return true if it is present in the array



function check(a, x) {
    return a.includes(x) ? true : false;
  }