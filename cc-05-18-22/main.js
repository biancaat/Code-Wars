// P: string
// R:string
// E: getMiddle("test"),"es"
// P: take string and turn into an array. condidtion - if array even return the middle 2 letters. if array off return the midle letter

function getMiddle (str){
    // turn string into array
    let arr = str.split('')
    // condition
    if (arr.length % 2 === 0){
        let even = `${arr[arr.length /2-1]} ${arr[arr.length /2]}`
        return even.replace(' ', '')
    } else if (arr.length % 2 !== 0){
        let odd = `${arr[Math.min(arr.length / 2)]}`
    }
}