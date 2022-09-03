// P: string
// R: string with every letter repeated by its length number and the first letter capitalized
// E: hight => H-Ii-Ggg-Hhhh-Ttttt
// P: turn string lower case, turn to array, map through and for each element capitalize first letter and repeat it index + 1 times then join the array with '-' sepperating each letter 

function accum(s) {
	return s.toLowerCase().split('').map((e,i,a) => `${e[0].toUpperCase()}${e.repeat(i)}`).join('-')
 
}