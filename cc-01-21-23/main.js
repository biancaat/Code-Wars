// P: string
// R: the sting as a camel case
// E: 'hello world' => 'HelloWorld'
//P: split string into array, loop through and capitalize the first letter of each string element, join th array and return


String.prototype.camelCase=function(){
    return this.split(' ').map((e,i,a) => e.slice(0,1).toUpperCase() + e.slice(1)).join('')
  }
  
  'test case'.camelCase()
  
  
  
  