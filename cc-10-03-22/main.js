// P: string with consecutive words
// R: string with consecutive words removed
// E: "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta" => "alpha beta gamma delta alpha beta gamma delta"
// P: loop through string if current elemnt == next element remove 

function removeConsecutiveDuplicates(str) {
  
    return str.split(' ').filter((e,i,a) => e !== a[i+1]).join(' ')
  }
  
  removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta")