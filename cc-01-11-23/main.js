// P: two strings
// R: return the letters in each string that are not present in the other
// E: 'xyab', 'xzca' => 'ybzc'
// P: loop through each string, if string A does not include the character in string B, set aside, if string b does not includ the characters in string A, set aside those chacters. return the characters that are not present as a string


function solve(a,b){
    let uniqueA = ''
    let uniqueB= ''
    
    for (let i = 0; i<a.length ;i ++){
      if (!b.split('').includes(a[i])){
          uniqueA += a[i]
        } 
    }
      for (let i = 0; i<b.length ;i ++){
      if (!a.split('').includes(b[i])){
          uniqueB += b[i]
        } 
    }
     
     
     return uniqueA+uniqueB
   };