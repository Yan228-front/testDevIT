function changeDupLetters(str) {
  let tempArray = [];
  let counter = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i - 1] == str[i]) {
      counter++;
    } else {
      if (counter != 1) {
        tempArray.push(str[i - 1]);
        tempArray.push(counter);
        counter = 1;
      } else {
        tempArray.push(str[i - 1]);
      }
    }
  }

  return tempArray.join("");
}

console.log(changeDupLetters("assdssddffffrrreeeweggggg"));
