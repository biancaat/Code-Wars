// P: 2 arrays of string
// R: which strings in array1 that the strings in array2 contain
// E: [ "live", "strong", 'arp'], ["lively", "alive", "harp", "sharp", "armstrong",] => [ "live", "strong", 'arp']
//P: double for loop, if the element in array2 contains the element in array1, push the array1 lement into a new array and return that array sorted

function inArray(array1,array2){
    let newArr = []
   
    for (var i = 0; i < array2.length; i++) {
      for (var j = 0; j < array1.length; j++) {
          if (array2[i].includes(array1[j])) {
              newArr.push(array1[j])
          }
      }
  }
   
    return ([...new Set(newArr.sort())])
  }  