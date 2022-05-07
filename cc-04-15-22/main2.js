// P:
// R: Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
// E: ([4,5,6],[1,2,3]), true);
// ([5,6,7],[4,5,6]), false);
// ([4,5,6],[3,4,5]), false);
// P: map through each array and power each element as appropriate. get the sum of each array by reducing. save these sums to separate variables. compare the sum of each variable. if sum A is higher return true, if opposite return false. 

function arrayMadness (a,b){
    let sumA = a.map(a => a**2).reduce((a,c) => a+c,0)
    let sumB = b.map(a => a**3).reduce((a,c) => a+c,0)
    
    if (sumA > sumB){
        return true
    }else{
        return false
    }
}

