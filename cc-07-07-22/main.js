// P: string
// R: return sting with duplicates removed
// E: 'a b a b c d a' => 'a b c d'
// P: turn sting to array, filter through array and removed the duplicate elements, join array and return new string

function removeDuplicateWords (string){
    return string.split(' ').filter((element,index,array) => array.indexOf(element) == index).join(' ')
}