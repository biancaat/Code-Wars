// P: array
// R: array with duplicates removed
// E: [1,2,2,3,3,4] => [1,2,3,4]
// P: take array and filter the deplicates, return the filtered array


function removeDuplicates (arr) {
    // indexOf will return the first index this element is found, if it is a duplicate it will not == the index of the element but rather the first index that the duplicate is found
    return arr.filter((e,i,a) => a.indexOf(e) === i)
}