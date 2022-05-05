// P:
// R: Create a function with two arguments that will return an array of the first (n) multiples of (x). Assume both the given number and the number of times to count will be positive numbers greater than 0. Return the results as an array (or list in Python, Haskell or Elixir).
// E: countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]
// P: create a holder for new array. create a loop that adds pushes the multiple into the array ad stops pushing the multiple once it = the second parameter


function countBy (x,y){
    let z = []
    for (let i = 1; i <= y; i++){
        z.push(x*i)
    }
    return z
}