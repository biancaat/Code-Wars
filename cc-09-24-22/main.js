// P: array of string numbers
// R: return a string where the number from the array corresponds to the letter to return in the reverse of the alphabet, include '!', '?', ' ' as number 27 28 & 29
// E: ['24', '12', '23', '22', '4', '26', '9', '8'] => 'codewars'
// P: declare array of alphatbet in reverse, staring with empty string so that index == position in alphabet. turn argument into array of numbers and map through and return the letter in the alphabet at the index of the number in the argument. return the full string 

function switcher(x){
    let alphabet = [' ','?','!','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'].reverse()
    
    return x.map(e => e++).map((e,i,a) => alphabet.map((x,y,z) => y+1 == e ? x : '')).flat().filter(e => e !== '').join('')
   }
   


// Refactored

function switcher(x){
    let alphabet = ['', "z", "y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a", "!", "?"," "];
    
     return x.map(e => e++).map((e,i,a) => alphabet[e]).join('')
    

   }
   
   
   