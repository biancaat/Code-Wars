// P: two arrays of numbers
// R: the number that is missing from the mixed array
// E: [1,2,3,4,5], [3,4,1,5] => 2
// P: find the missing element by filtering arr where the element in arr index ==-1 in mixArr array, return the missing element, if no missing element return 0

function findDeletedNumber(arr, mixArr) {
    return arr.filter((e,i,a) => mixArr.indexOf(e) ==-1)[0] || 0
     
   }