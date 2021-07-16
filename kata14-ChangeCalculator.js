const calculateChange = function(total, cash) {
  let currency = [
    ['twentyDollars', 2000],
    ['tenDollars', 1000],
    ['fiveDollars', 500],
    ['twoDollars', 200],
    ['oneDollars', 100],
    ['quarter', 25],
    ['dime', 10],
    ['nickel', 5],
    ['penny', 1]
  ]
  let change = cash - total;
  let output = {};

  let i = 0;
  while (change !== 0) {
    let value = Math.floor(change / currency[i][1]);
    change = change % currency[i][1];
    if (value !== 0) {
      output[currency[i][0]] = value;
    } 
    i++;
  }
  return output;
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
console.log(calculateChange(500, 2500));