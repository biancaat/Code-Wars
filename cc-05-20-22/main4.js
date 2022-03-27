// P: numbers
// R: number
// E: (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// P: 
// 1. take arguments and place them into a sorted aray from lowest to highet
// 2. create a variable that will hold our sum
// 3. create a fir loop that starts at the loest number out of a and b and is <= the highest number out of a and b
// 4. add each iteration together and add it to the sum variable
// 5. if a and b and equal return the value of the parameters, if not return the sum


function getSum (a,b){
// 1. take arguments and place them into a sorted aray from lowest to highest
    let arr = [a,b].sort((a,b) => a-b)
// 2. create a variable that will hold our sum
    let sum = 0
// 3. create a for loop that starts at the loest number out of a and b and is <= the highest number out of a and b
    for (let i = arr[0]; i<= arr[arr.length-1]; i++){
// 4. add each iteration together and add it to the sum variable
        sum += i
    }
// 5. if a and b and equal return the value of the parameters, if not return the sum
    if (a === b){
        return a
    } else{
        return sum
    }
}

