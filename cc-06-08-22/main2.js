// P: array of strings
// R: a string based on number of good reviews
// E: (well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!')
// P: loop through array and count how many 'good'. condition of what do do based on how many 'good' strings


function well(x){
	let goodIdeaCount = 0
  for (let i =0; i< x.length; i++){
    if (x[i] === 'good'){
      goodIdeaCount += 1
    }
  }
  if (goodIdeaCount <=0 ){
    return 'Fail'
  } else if (goodIdeaCount <=2){
    return 'Publish'
  } else {
    return 'I smell a series!'
  }
}