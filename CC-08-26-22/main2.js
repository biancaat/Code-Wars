// P: number
// R: number as string formatted for dollars and cents with 2 decimal points
// E: 30 => $30.00
// P: return $ to number with 2 decimal points

function formatMoney(amount){
    return `$${amount.toFixed(2)}`
  }