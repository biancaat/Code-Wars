// P: string
// R: true if string is uppercase false if not
// E: 'Hello' => false
// P:

String.prototype.isUpperCase = function() {
    return this.split('').map((e,i,a) => e === e.toUpperCase()).indexOf(false) === -1 ? true : false
  }
  
  'ERE'.isUpperCase()