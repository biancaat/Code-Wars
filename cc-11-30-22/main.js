// P: string of name, case sensitive
// R: number of lightsabers the person owns, number
// E: "Jake" => 0, "Zach" => 18
// P: if name == 'Zach', return 18, else return 0

function howManyLightsabersDoYouOwn(name) {
    return name == 'Zach' ? 18 : 0
  }