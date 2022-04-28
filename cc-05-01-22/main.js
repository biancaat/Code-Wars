// P:
// R: Given a non-empty array of integers, return the result of multiplying the values together in order
// E: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
// P: use reduce to get the sum of all the elements multiplied by each other

function grow(x){
    return x.reduce((a,c) => a*c)
}