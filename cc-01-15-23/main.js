// P: array of objects that contain demographic data
// R: the average age of the data, rounded to nearest whole integer
// E:
// P: loop through object, reduce to get sum of all ages, divide by length to get the average. round the value and return

function getAverageAge(list) {
	return Math.round(list.reduce((a,c) => a + c.age, 0) / list.length)
}