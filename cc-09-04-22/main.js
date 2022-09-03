// P: srting
// R: boolean, true if all characters are unique, false if there are duplicate characters
// E: 'aba' => false, wert => 'true'
// P: if sting lenth = set size return true

function isogram(str){
    return str.length == new Set(str.toLowerCase()).size
}