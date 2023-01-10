// P: a string with two words 
// R: return the first letter of each word swapped with the other word
// E: 'not picking' => 'pot nicking'
// P: split the string into separate words and isolate the first letter of each word into a variable, remove the first letter of each word and replace it with the opposite letter


function spoonerize(words) {
    words = words.split(' ')
  let [a, b] = [words[0][0], words[1][0]]
    words = words.map((e,i,a) => e.slice(1))
  
  return `${b}${words[0]} ${a}${words[1]}`
}