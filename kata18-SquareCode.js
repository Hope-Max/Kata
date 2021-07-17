const squareCode = function(message) {
  let messageWithoutSpaces = message.replaceAll(' ', '');
  let columns = Math.ceil(Math.sqrt(messageWithoutSpaces.length));

  let arrayOfmessage = []; 
  for (let i = 0; i < (messageWithoutSpaces.length / columns); i++) {
    let text = messageWithoutSpaces.slice(columns * i, columns * (i + 1));
    arrayOfmessage.push(text);
  }

  let output = [];
  let joinLetter = '';
  let j = 0;
  while(j < columns) {
    for (let letter of arrayOfmessage) {
      if (letter[j] !== undefined) {
        joinLetter += letter[j];
      }
    }
    output.push(joinLetter);
    joinLetter = '';
    j++;
  }

  return output.join(' ');
}

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));