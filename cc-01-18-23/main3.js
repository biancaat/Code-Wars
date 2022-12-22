// P: a number that represents the number of floors a tower will have 
// R: a tower with the number of floors and built with "*"
// E: 3 => 
// ["  *  ",
//  " *** "
// 	"*****"]
// P: create a variable for the tower array, the blocks "*", space " " and a counter starting at 1. Loop through the number of floors and push the block into the tower array by the counter number, then add 2 to the counter. create a variable to hold the value of the empty space that surrounds each floor. create a varible to hold the finalTower array. loop through the tower array and push the floor with the number of blocks surrounded on each side by the number of empty spaces, decrease the number of empty spaces by one ect. return the final tower 


function towerBuilder(nFloors) {
    let tower = []
    let blocks = '*'
    let space = ' '
    let count = 1
    
    
    for (let i = 0; i < nFloors; i++){
      tower.push(`${blocks.repeat(count)}`)
      count += 2
    }
    
    let numEmptyChar = (tower[tower.length-1].length - 1) /2
    let finalTower = []
  
    for (let j = 0; j< tower.length; j++){	      				    finalTower.push(`${space.repeat(numEmptyChar)}${tower[j]}${space.repeat(numEmptyChar)}`)
      numEmptyChar -= 1
    }
    
    return finalTower
  }
  
  towerBuilder(5)

//   REFACTORED

function towerBuilder(nFloors) {
    let tower = []
    
    for (let i = 0; i< nFloors; i++){
      tower.push(" ".repeat(nFloors -i-1)
                 + "*".repeat((nFloors * i)+1)
                 +" ".repeat(nFloors-i-1))
    }
    return tower
  }


