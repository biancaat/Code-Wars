// P: string
// R: boolean
// E: '123','123','September 5, 2014','October 1, 2014'), true 
// P: get date in millisconds from current date and date expiration, if couponcode === coupon input && date expired > current date return true else return false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    let dateNow = Date.parse(currentDate)
    let dateExpire = Date.parse(expirationDate)
  
    return enteredCode === correctCode && dateExpire >= dateNow ? true : false
    
  }