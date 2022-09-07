// P: an array of numbers
// R: the differnce in value between the largest number and the smallest number, if array empty or contains 1 number return 0
// E: [0, 1, 2, 3, 4, 5, 6] => 6
// P: if array length == 0 or 1 return 0, else get the highest value and lowest value and subract, return that number

// *NOTE: sort does not appropriateley sort negative integers

function maxDiff(list) {
	return list.length ? Math.max(...list) - Math.min(...list) : 0
  
};