// P: string where C = cat and m = mouse, if more than 3 dots between the letters, cat cannot catch the mouse, 3 or less cat can catch the mouse
// R: whether or not the cat can catch the mouse
// E: C....m', "Escaped!", 'C..m', "Caught!"
// P: loop through string, if element == . increase count by one, if count greater than 3 return Escaped else return caught

function catMouse(x){
	let count = 0
  x = x.split('')
  
  for (let i = 0; i<x.length; i++){
    if ('.'.includes(x[i])){
      count++
    }
  }
  if (count > 3){
    return 'Escaped!'
  }else{
    return 'Caught!'
  }
}

catMouse('C..m')