// P: string
// R: string name reversed
// E: billy jean => jean billy
// P: reverse name return

function nameShuffler(str){
    let shuff = str.split(' ')
    return `${shuff[1]} ${shuff[0]}`
  }