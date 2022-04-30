// P:
// R: This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
// E: 
// P: if number even * by 8, if odd * by 9

function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9;
}