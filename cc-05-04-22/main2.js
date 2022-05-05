// P:
// R: Create a function that gives a personalized greeting. This function takes two parameters: name and owner. Use conditionals to return the proper message:
// E: Test.assertEquals(greet('Daniel', 'Daniel'), 'Hello boss')
// Test.assertEquals(greet('Greg', 'Daniel'), 'Hello guest')
// P: if name === boss name return hello owner if not return hello guest

function greet (name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest'
  }