function primeArray(arrayLeng) {
  let arr = [];

  nextPrime: for (let i = 2; i <= 100000; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        continue nextPrime;
      }
    }
    if (arr.length == arrayLeng) {
      break;
    }
    arr.push(i);
  }
  return arr;
}

console.log(primeArray(5)); // [2,3,5,7,11];
console.log(primeArray(7)); // [2,3,5,7,11,13,17];
