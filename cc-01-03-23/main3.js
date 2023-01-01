// P: card with a suit
// R: return the suit of the card
// E: '10♣' => 'clubs'
// P:

function defineSuit(card) {
    if (card.split('')[card.length-1] == '♣' ){
      return 'clubs'
    } else if (card.split('')[[card.length-1]] == '♦' ){
      return 'diamonds'
    } else if (card.split('')[[card.length-1]] == '♥' ){
      return 'hearts'
    } else if (card.split('')[[card.length-1]] == '♠' ){
      return 'spades'
  }
  }