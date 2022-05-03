// P:
// R: Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
// E: countSheep(1), "1 sheep..."
// P: fill an empt string with the number of sheep call as an argument

function countSheep (num){
    let str = ''
    for (let i = 1; i <= num ; i ++){
        str += `${i} sheep...`
    }
    return str
}

// OR

function countSheep (num) {
    let sheepArr = [];
    for (let i = 1; i <= num; i++){
        heepArr.push(`${i} sheep...`)
    }
    return sheepArr.join('')
}



