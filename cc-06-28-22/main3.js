// P: string
// R: boolean
// E: first and last letter of animal have to be the same as first and last letter of the dish => 'great blue heron', 'garlic naan' = true
// P: turnary if first and last letter of animal is the same as dish return true else return false

function feast(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length -1] === dish[dish.length -1] ? true :false
    }
    