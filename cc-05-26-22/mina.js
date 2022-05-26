// P: number
// R: array of numbers
// E: reverseSeq(5), [5, 4, 3, 2, 1])
// P: create empty array, loop and push a number into the empty array in reverse sequence

function reverseSeq (n){
    let arr= []
    for (let i = 1; i<= n; i++){
        arr.unshift(i)
    }
}
