//Zavd e:
function makeRand(num) {
  let usedNumbers = [];

  function f() {
    if (usedNumbers.length == num) usedNumbers = [];

    let i = Math.floor(Math.random() * num) + 1;

    return usedNumbers.includes(i) ? f() : (usedNumbers.push(i), i);
  }

  return f;
}

let x = makeRand(100);

console.log(x());
console.log(x());
console.log(x());
