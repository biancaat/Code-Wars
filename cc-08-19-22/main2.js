// P: array of sheep and wolf
// R: if wolf is behind sheep return string warning sheep the wolf is there, if wolf is at the begginging tell him to go away
// E: 
// P:

function warnTheSheep(queue) {
    position = queue.reverse().indexOf('wolf')
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${ position }! You are about to be eaten by a wolf!` 
    
  }