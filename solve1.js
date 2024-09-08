function calculateMoney(ticketSale) {
    if(ticketSale < 0 || typeof ticketSale !== 'number'){
        return "Invalide Number"
    }


  let amount = ticketSale * 120 - (500 + 50 * 8);
  return amount
}

console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));
console.log(calculateMoney("ten"));

