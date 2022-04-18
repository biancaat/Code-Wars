// P:
// R: Your task is to create a function that does four basic mathematical operations.The function should take three arguments - operation(string/char), value1(number), value2(number).The function should return result of numbers after applying the chosen operation.
// E: ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7
// P: create a function that takes in an operation and determaines what to do based on a condition. 

function basicOp (operation, value1, value2){
    switch (operation) {
        case '+': return value1 + value2
        case '-': return value1 - value2
        case '*': return value1 * value2
        case '/': return value1 / value2
    }
}

basicOp('+',3,5);

// OR

function basicOp(operation, value1, value2){
    if (operation === '+'){
        return value1 + value2;
        } else if (operation === '-'){
          return value1 - value2;
        } else if (operation === '*'){
          return value1 * value2;
        } else if (operation === '/'){
          return value1 / value2;
        } else{
          return 'Error.'
        }
      
  }
  
  basicOp('-',15,18);