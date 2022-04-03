// P: string
// R: string with vowels removed, y does not count as vowel
// E: "This website is for losers LOL!"), "Ths wbst s fr lsrs LL!"
// P: turn string into an array. Filter the vowels out of the array. return the new array joined as a string again with the vowels missing. Remeber to consider the case

function disemvowel (str){
    // turn string into an array
    let strArr = str.split('')
    // filter the vowels out
    let filtered = strArr.filter(x => x !== 'a' && x !== 'e' && x !== 'i' && x !== 'o' && x !== 'u' && x !== 'A' && x !== 'E' && x !== 'I' && x !== 'O' && x !== 'U' )
    // return the filtered array and turn it back into string 
    return filtered.join('')
}

