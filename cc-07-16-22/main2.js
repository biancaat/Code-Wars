// P: number
// R: string
// E: 2 => 'drink toddy'
// P: use turnary to determine what the person should drink based on age

function peopleWithAgeDrink(old) {
    return old < 14 ? 'drink toddy' : old < 18 ? 'drink coke' : old < 21 ? 'drink beer' : 'drink whisky'
  };