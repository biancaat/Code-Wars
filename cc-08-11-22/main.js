// P: number in km/hr
// R: number in cm/s rounded down to the nearest whole number
// E: 1.08 => 30
// P: multiply s by 1 km/hr to cm/s then floor the value return it 

function cockroachSpeed(s) {
    return Math.floor(s*27.7778)
  }