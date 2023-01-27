// P: integer
// R: all the divisors of that integer or 'integer is prime'
// E: 13 => '13 is prime' ; 15 => [3,5]
// P: 

function divisors(integer) {
    let divide = []
    for (let i = 2; i< integer; i++){
      if (integer % i == 0){
        divide.push(i)
      }
    }
    return divide.length ? divide : `${integer} is prime`
  };
  