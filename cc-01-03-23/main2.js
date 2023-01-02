// P: array of strings
// R: debug the code so the the template literal is working
// E: 
// P:

function buildString(...template){
    return `I like ${template.join(', ')}!`;
  }
  
  buildString('Cheese','Milk','Chocolate')