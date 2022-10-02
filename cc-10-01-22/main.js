// P: number and string ratio of numbers
// R: the width and height of the string based on the width and given ratio
// E: 1024,"4:3", "1024x768"
// P: turn string ration into numbers, divide width by height, take that value and divide the given width by the divided ratio, return a string 'widthxhight'

function findScreenHeight(width, ratio) {
    let denominator =  ratio.split(':').map(e => Number(e)).reduce((a,c) => a/c)
    
    let height = width / denominator
    return `${width}x${height}`
}

findScreenHeight(1024,"4:3", "1024x768")