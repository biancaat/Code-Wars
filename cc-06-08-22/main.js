// P: array of numbers and a number
// R: an array of number that are a multiple of the divisor
// E: [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
// P: filter through array, if element % divisor === 0 return that number

function divisibleBy(numbers, divisor){
    return numbers.filter(x => x % divisor === 0)

}

function divisibleBy(numbers, divisor){
    let arr =[]
    for (let i = 0; i< numbers.length; i++){
        if (numbers[i] % divisor === 0){
            arr.push(numbers[i])
        }
    }
    return arr
}