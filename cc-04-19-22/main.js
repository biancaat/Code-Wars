// P:
// R: An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.
// E: pointsPer48(12, 20) // 28.8
// pointsPer48(10, 10) // 48 
// pointsPer48(5, 17) // 14.1 
// pointsPer48(0, 0) // 0
// P: divide ppg by mpg and multiply by 48 to gte points per min. take return a number rounded to the closest tenth.

function pointsPer48(ppg, mpg) {
    let time = ((ppg/mpg)*48).toFixed(1);
    if (time === 'NaN'){
        return 0
    } else{
        return Number(time);
    }
}