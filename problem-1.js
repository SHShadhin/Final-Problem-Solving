function newPrice(currentPrice, discount) {

  if(typeof(currentPrice) !== 'number' || typeof(discount) !== 'number') {
    return "Invalid"
  }

  if (discount < 0 || discount > 100) {
    return "Invalid";
  }

  let discountPrice = (currentPrice * discount) / 100;
  let payAmount = currentPrice - discountPrice;
  let result = payAmount.toFixed(3);
  
  return result;
}



const output = newPrice(2000, 15);
console.log(output);
