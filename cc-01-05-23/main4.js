// P: string name
// R: an array containing the name and the name truncated to 2 characters. if name is <= 2, return the name as is
// E: 'mexico' = ['mexico', 'me'], 'a' = ['a','a']
// P: 

function whoIsPaying(name){
    return name.length > 2 ? [name, name.slice(0,2)] : [name]
  }