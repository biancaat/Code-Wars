// P: 2 numbers
// R: 1 number
// E: 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// P: create counter, initialize loop, if the current value includes a 5 exclude it from the count

function dontGiveMeFive(start, end){
    let count = 0
    for (let i = start; i<= end; i++){
        if (!i.toString().includes('5')){
            count +=1
        }
    }
    return count
  
}