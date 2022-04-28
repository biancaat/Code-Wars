// P: string
// R: boolean
// E: XO("ooxx") => true
//  XO("xooxx") => false
// P: turn string to array. create x counter and o counter. loop through array, if element = x add to x counter, if element = o add to o counter. if xcounter = o counter return true else return false

function XO(str){
    let xCounter = 0
    let oCounter = 0
    let arr = str.toLowerCase().split('')

    for (let i = 0; i<= arr.length ; i++){
        if (arr[i] === 'x'){
            xCounter += 1
        } else if (arr[i] === 'o'){
            oCounter += 1
        }
    }
    return xCounter === oCounter ? true : false
}