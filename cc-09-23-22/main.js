// P: 2 arays with numbers
// R: return the number that is not present in the second array that is present in the first array
// E: [6, 1, 3, 6, 8, 2], [3, 6, 6, 1, 2] => 8
// P: soroth arrays, loop through if the element in array1 != element in array 2, return the element in array 1

function findMissing(arr1, arr2) {
    let sort1 = arr1.sort()
    let sort2 = arr2.sort()
     
     for (let i =0; i <= sort1.length ; i++){
         if (sort1[i] != sort2[i]){
           return arr1[i]
         }
     }
     
   }