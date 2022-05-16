// P: booleans
// R: return ture if you are emplyed and not on vacation, all else return false
// E: setAlarm(true, true),  false or setAlarm(true, false), true
// P: if parameter employed is ture and vacation is false i need to set an alarm. create this as a conditional

function setAlarm(employed, vacation){
    return employed === true && vacation === false ? true : false
    }