// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// P:
// R: Return the sum of two arrays (their elements)
// E: [1,2,3] & [4,5,6] = 21
//    [10,10,10] & [20,20,20] = 90
//    [2,10,6] & [15,30,20] = 83
// P: combine both arrays
//    and reduce through each element to return a sum of both.

function addArrays (arr1,arr2){
    let newArr = arr1.concet(arr2);
    return newArr.reduce((accumulator, curent) => accumulator + current,0)
}

console.log(addArrays([1,2,3],[4,5,6]),21)