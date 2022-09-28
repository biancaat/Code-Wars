// P: a non zero integer
// R: if integer / 3 return "Java", if integers / 3 and 4 return 'Coffee', if one of the above is true and the integer is even add 'Script' to the end of the string, if none of the conditions are true return "mocha_missing!"
// E: caffeineBuzz(1)   => "mocha_missing!" caffeineBuzz(3)   => "Java" caffeineBuzz(6)   => "JavaScript" caffeineBuzz(12)  => "CoffeeScript"
// P: else if statement and return the above conditions

function caffeineBuzz(n){
	if (n % 3 == 0 && n % 4 == 0 && n % 2 == 0){
    return 'CoffeeScript'
  } else if (n % 3 == 0 && n % 4 == 0 && n % 2 !==0){
    return 'Coffee'
  } else if (n % 3 == 0 && n % 2 == 0){
    return 'JavaScript'
  } else if (n % 3 == 0){
    return 'Java'
  } else {
    return 'mocha_missing!'
  }
}