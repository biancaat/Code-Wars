// P: string
// R: return small if string == alligator, else return wide
// E: 'alligator' => 'small' , 'cat' => 'wide'
// P: if string lowercase == alligator return small else return wide


function mouthSize(animal) {
    return animal.toLowerCase() == 'alligator' ? 'small' : 'wide'
  }
  
  mouthSize('')