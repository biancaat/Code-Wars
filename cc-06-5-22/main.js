// P: array
// R: first number after non consecutive number
// E: firstNonConsecutive([1,2,3,4,6,7,8], 6)
// P: loop through array, if current element + 1 doesnot equal the element above, return the element above

function  firstNonConsecutive (arr) {
    for (let i = 0; i< arr.length; i++){
        if (arr[i] +1 !== arr[i+1]){
            return arr[i +1]
        }
    }
    return null
}