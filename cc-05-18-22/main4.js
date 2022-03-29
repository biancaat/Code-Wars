// P: array of string and numbers
// R: array of number
// E: filter_list([1,2,'a','b']) == [1,2]
// P: filter array so that only numbers are returned

function filter_list(l) {
    return l.filter(x => x === Number(x))
    }