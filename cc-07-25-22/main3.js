// P: string
// R: string based on if there a 15 'n' or less = 'woohoo' more than 15 = 'car dead'
// E:
<<<<<<< HEAD
// P: turnary, string turned into array, filter to see how many 'n's, if length greater than 15, car dead, if 15 or less, woohoo
=======
// P: turnary, string truened into array, filter to see how many 'n's, if length greater than 15, car dead, if 15 or less, woohoo
>>>>>>> fdde8c6cb45c9e862f02c03a736caef680557dc3

function bump(x){
    return x.split('').filter(e => e == 'n').length > 15 ? 'Car Dead' : 'Whoohoo!'
  
  }