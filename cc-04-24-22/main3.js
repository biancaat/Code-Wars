// P:
// R: Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string. Note: input will never be an empty string
// E: fakeBin('45385593107843568'), '01011110001100111'
// P: take a string of numbers and split it into an array. Loop through each element and if the string number is less that 5, change element value to '0', if string number is greater than or equal to 5, change element value to '1'. take that array and join it into one string number. return the new string. 

function fakeBin(x){
    let arrFromX = x.split('');
    
    for (let i = 0; i< arrFromX.length; i++){
        if (arrFromX[i] === '0' || arrFromX[i] === '1' || arrFromX[i] === '2' || arrFromX[i] === '3' || arrFromX[i] === '4'){
            arrFromX[i] = '0'
        } else if  (arrFromX[i] === '5' || arrFromX[i] === '6' || arrFromX[i] === '7' || arrFromX[i] === '8' || arrFromX[i] === '9'){
            arrFromX[i] = '1' 

        }
    }
    return arrFromX.join('')
}

// Refactored

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('')
   }
     