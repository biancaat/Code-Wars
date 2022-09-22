// P: array of numbers
// R: boolean if element is == to another element + 1 or - 1
// E: [[2,10,9,3] => true [2,10,9,4] => false
// P: loop through array and make sure every element is either == to another elemnt + or - 1

function isNice(arr){
    let plus = arr.map((e,i,a) => e + 1)
    let minus = arr.map((e,i,a) => e - 1)
    
    let concat = plus.concat(minus)
    let newArr = []
    
   for (let i = 0; i< arr.length; i++){
     if (concat.includes(arr[i])){
       newArr.push(true)
     } else{
       newArr.push(false)
     }
   }
    return newArr.every(e => e ==true) 
  }

  // Refactored

function isNice(arr){
    return arr.every(x => arr.some(y => y +1 == x || y -1 == x))
   }
   
