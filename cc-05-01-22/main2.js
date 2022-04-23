// P:
// R: You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1. As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
// E: monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// P: create an empty array and loop though the number of the amount we want to fill, and push that number into the empty array


function monkeyCount(n) {
    let newArr = [];
    for (let i = 1; i <=n; i++){
        newArr.push(i)
    }
    return newArr
    }