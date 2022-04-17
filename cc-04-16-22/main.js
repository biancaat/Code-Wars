// P:
// R: Create a function which answers the question "Are you playing banjo?". If your name starts with the letter "R" or lower case "r", you are playing banjo! The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"
// E: areYouPlayingBanjo("Paul"), "Paul does not play banjo");
// (areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
// P: set up conditional that compares the first index of the name argument. if name begins with r, they play banjo. If not, they do not play banjo.

function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === 'r'){
        return `${name} plays banjo.`
    } else {
        return `${name} does not play banjo.`
    }
  }

  areYouPlayingBanjo('Bianca');
