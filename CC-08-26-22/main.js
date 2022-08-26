// P: string or number
// R: true if sequence is a pallindrome else false
// E: 'leon noel' => true | 1345 => false
// P: turn parameter to string, loop through characters and if paramter == paramter reversed return true, else false

function isPalindrome(line) {
    return line.toString().split('').reverse().join('') == line ? true : false
  }