// P: string
// R: string
// E: "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// P: turn string into an array. loop through array. if array element = A, replace with T. If element = T, replace with A. If element = C, replace with G, if element = G, replace with C. return the new string

function DNAStrand (dna){
    let newDNA = ''
    let arr = dna.split('')

    for (let i = 0; i<= arr.length; i++){
        if (arr[i] === 'A'){
            newDNA += 'T'
        }else if (arr[i] === 'T'){
            newDAN += 'A'
        } else if (arr[i] === 'C'){
            newDAN += 'G'
        }else if (arr[i] === 'G'){
            newDAN += 'C'
        }
    }
    return newDNA
}