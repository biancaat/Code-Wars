// P: string
// R: string of words in order, but letters in words are reversed
// E: "This is an example!" ==> "sihT si na !elpmaxe"
// P: split string into array, reverse the array, joint it, split is again, then reverse


function reverseWords (str){
    return str.split('').reverse().join('').split(' ').reverse().join(' ')
}