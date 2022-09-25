// P: an array of numbers
// R: the number of conscutive paris in the array
// E: [1,2,5,8,-4,-3,7,6,5] => 3
// P: set a counter, create a variable that returns the array if it is even length or slices the last element if it is an odd length. loop through the array, if the element + 1 or -1 == the next element add one to the counter, if not add 0, return the counter

function pairs(ar){
    // create a counter for the consecutive pairs
       counter = 0
    // this variable returns an even length array in order to compare pairs
    let even = ar.length % 2 != 0 ? ar.slice(0,ar.length -1) : ar
    
    // for loop that increments by 2, in order to compare every pair instead of every element
    for (let i = 0; i<even.length; i+=2){
      if (even[i] + 1 == even[i+1] || even[i] - 1 == even[i+1]){
      counter+=1
      } else{
        counter +=0
      }
    }
    return counter
  };