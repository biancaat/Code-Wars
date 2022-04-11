// P:
// R: It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script. Return the average of the given array rounded down to its nearest integer. The array will never be empty.
// E: [89,92,75,79] = 83
// P: creat a function that takes in an array, the function adds the sum of the array and divides it by the length of the array and. return the rounded down average to its nearest integer. 

function getAverage (arr){
    let sum = arr.reduce((a,c)=> a+c)
    let average = sum / arr.length
    let roundDown  = average.Math.floor()
    return roundDown;
}

getAverage([2,2,2,2]),2;

function getAverage (arr){
    return Math.floor(arr.reduce((x,y)=> (x+y)) / arr.length)
}

getAverage([89,92,75,79], 83);