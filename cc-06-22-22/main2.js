// P: number
// R: number, 0 if the bus can fit all passengers, or if not the number of passengers that cannot fit
// E: cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers || cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waiting
// P:

function enough(cap, on, wait) {
    return on + wait <= cap ? 0 : (cap - on - wait) *-1
  }