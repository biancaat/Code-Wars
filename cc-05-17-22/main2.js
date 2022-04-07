// P: string
// R: number of vowels in the string 
// E: getCount("abracadabra"), 5
// P: convert string argumetn into array. filter the vowels in the array into a new array. count the number of vowel elements in the array.

function getCount (str){
    // turn str to array
    let strArr = str.split('')
    // filter through vowels and add to new array
    let filtered = strArr.filter(x => x === 'a'|| x === 'i'|| x === 'e' || x=== 'o' ||x=== 'u')
    // return the number of elements in new filtered array
    return filtered.length
}