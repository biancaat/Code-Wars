// P:
// R: Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. The output should be two capital letters with a dot separating them.
// E: Sam Harris => S.H
// patrick feeney => P.F
// P: turn name into an array of two elements. take the first letter of each array element and join with '.' inbetween. MAke sure everything is capitalized. return the initials

// Refactored:
function abbrevName(name){
    let nameArr = name.split(' ');
    return (nameArr[0][0] + '.' + nameArr[1][0]).toUpperCase();

}



function abbrevName(name){
	let nameArr = name.split(' ');
  let firstLetter = nameArr[0].charAt(0);
  let secondLetter = nameArr[1].charAt(0);
  return `${firstLetter}.${secondLetter}`.toUpperCase()

}