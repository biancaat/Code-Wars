// P: string of numbers and lowercase letters
// R: return the largest grouping of numbers
// E: "gh12cdy695m1" => 695
// P: filter out letters, return largest number

function solve(s){
    let arr = s.split('')
    
    // separates the numbers from the letters, NaN returned for non numbers
    for (let i = 0; i< arr.length; i++){
      arr[i] = arr[i]-0
    }
      // makes arr back to string and splits the string at NaN to filter out non numbers
      arr = arr.join('').split('NaN')
      // returns the largest number element as a number
      return Math.max(...arr)
    }
    
    solve("gh12cdy695m1")
    