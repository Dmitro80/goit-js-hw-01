function makeTransaction(quantity, pricePerDroid) {
  const allPricePerDroid = quantity * pricePerDroid;
  const message = `You ordered ${quantity} droids worth ${allPricePerDroid} credits!`;
  return message;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
