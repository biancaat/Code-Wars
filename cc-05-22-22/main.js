// P: string
// R: string where 't' is replaced with 'u'
// E: "GCAT"  =>  "GCAU"
// P: take string and make into an array. for each element, if element = 't' replace it with 'u'. return the string

function DNAtoRNA (dna){
    let arr = dna.split('')

    for (let i = 0; i<=arr.length; i++){
        if(arr[i] === 'T'){
            arr[i] = 'U'
        }
    }
    return arr.join('')
}