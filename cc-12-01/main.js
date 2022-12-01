// P: number of hulas hooped, greater than 0, not negative
// R: if n <10 return "Keep at it until you get it". if n >10 return "Great, now move on to tricks".
// E: 3 => "Keep at it.." 13 => Great, now..
// P:turnary if n less than 10 return string greater than 10 return other string

function hoopCount (n) {
    return n < 10 ? "Keep at it until you get it" : "Great, now move on to tricks"
 }