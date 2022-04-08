// P: string
// R: conditional if light = green return yellow, if yellow return red, if red return green
// E: updateLight("green"), "yellow"
// P: use condition/turnary

function updateLight(current) {
    return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green'
  }