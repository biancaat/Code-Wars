// P: a string that is either a palindrome or not, string can contain special characters, however these characters are not considered in determining a pallindrome. no numbers or string numbers
// R: return true if string is pallindrome, false if not
// E: "Amore, Roma" => valid
// P: string string to array, create a new array to hold filtered string, loop through string array and if element is letter of the alphabet push to filtered array. return true if filtered string == filtered reversed string


function palindrome(string) {
    // turn string to lowercase array
   let arr = string.toLowerCase().split('')
 // where our filtered array element will be held
 let filtered = []
 
 // for loop 
 for (let i = 0; i<  arr.length; i++){
   // if element is letter of alphabet, 
   if ('abcdefghijklmnopqrstuv'.includes(arr[i])){
     // push the element to the filter array
     filtered.push(arr[i])
   } 
 }
 // if filter string == filter reverse string return true
 return filtered.join('') == filtered.reverse().join('')
}

palindrome("Amore, Roma")