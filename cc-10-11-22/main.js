// P: number
// R: string number with dashes inbetween each two odd digits
// E: 454793 => '4547-9-3'. Don't count zero as an odd digit.
// P: loop through number if current element and next element are odd add a dash to the first element, return the new string

function insertDash(num) {
	num = num.toString().split('')
  
  for (let i = 0; i<num.length -1 ; i ++){
    if (num[i] % 2 != 0 && num[i+1] % 2 != 0){
      num[i] = num[i]+'-'
    }
  }
  return num.join('')
}

insertDash(454793)