function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }
  let totalIncome = 0;
  for (const payment of arr) {
    if (payment >= 3000) {
      let tax = payment - payment * 0.2;
      totalIncome += tax;
    } else {
      totalIncome += payment;
    }
  }
  let saving = totalIncome - livingCost;
  if (saving >= 0) {
    return saving;
  } else {
    return "earn more";
  }

//   return saving >= 0 ? saving : "earn more";
}
const income = monthlySavings([1000, 2000, 3000], 5400);
console.log(income)
const income1 = monthlySavings([1000, 2000, 2500], 5000);
console.log(income1);
const income2 = monthlySavings([900, 2700, 3400], 10000);
console.log(income2);
const income3 = monthlySavings(100,[900, 2700, 3400]);
console.log(income3);
