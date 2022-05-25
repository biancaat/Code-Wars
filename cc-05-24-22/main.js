// P: array of arrays
// R: number
// E: number([[10,0],[3,5],[5,8]]),5
// P: map through array and add the first element and subtract the second element of each array element. reduce the numbers to find the amount of people left on bus

function busStop (number){
    return number.map(a => a[0]-a[1]).reduce((a,c)=> a+c)
}