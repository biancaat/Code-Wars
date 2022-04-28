// P: string
// R: number of letters in the shortest word
// E: "Let's travel abroad shall we"), 2
// P: turn string into an array. sort the words in the array from shortest to longest. return the length of the word of the first element in the sorted array.

function findShort (str){
    let sortedArr = str.split(' ').sort((a,b) => a.length - b.length)
    return sortedArr[0].length
}