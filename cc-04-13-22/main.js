// P
// R: We want an array, but not just any old array, an array with contents! Write a function that produces an array with the numbers 0 to N-1 in it. Note: The parameter is optional. So you have to give it a default value.
// E: For example, the following code will result in an array containing the numbers 0 to 4
// arr(5) => [0,1,2,3,4]
// P: Create a function that creates a place to store an array. create a loop that will iterate through a number and then push each iteration to the end on the empty array. return the array. 

function arr (n){
    // declare variable that is an empty array for future storage
    let newArr = [];
    // creat loop to iterate through all possible numbers we want in our array
    for (let i = 0; i < n; i++){
        // push each number that we iterate to the end of the empty array
        newArr.push(i);
    }
    // return the value
    return newArr
}

arr(5);

