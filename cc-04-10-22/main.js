// P:
// R: Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. Return your answer as a number.
// E: ['2','22', '10', 5] = 39
//    [3,5,'7','6'] = 21 
// P: create function that takes in an array
//    convert string integers to numbers
//    add numbers to get sum
//    return sum

function sum (arr){
    return arr.map(Number).reduce((a,c)=> a+c);
}

sum(['2','22', '10', 5],39)

function sum (arr){
    return arr.map(a => +a).reduce((a,c) => a+c)
}

sum(['2','22', '10', 5],39)

function sum (arr){
    return arr.reduce((a,c) => a + (+c), 0)
}