// P: string
// R: a greeting depending if there is a parameter or not
// E: '' => hello wolrd, 'bianca' => hello bianca
// P:

function hello(name) {
  
    return name == '' || name == null || name == undefined ? `Hello, World!` :`Hello, ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`
  }