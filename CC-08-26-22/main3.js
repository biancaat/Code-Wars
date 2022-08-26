// P: number
// R: string based on if number squared > 1000
// E: 50 => "It's hotter than the sun!!" | 2 => "Help yourself to a honeycomb Yorkie for the glovebox."
// P: squre number, if number > 1000 one string number < 1000 other string

function apple(x){
    let number = Number(x)
    return number**2 > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."
  
  }
  