const camelCase = function(input) {
  const arrayOfWord = input.split(' ');
  let message = '';
  message += arrayOfWord[0];

  for(let i = 1; i < arrayOfWord.length; i++) {
    firstLetter = arrayOfWord[i][0].toUpperCase();
    newWord = firstLetter + arrayOfWord[i].slice(1);
    message += newWord;
  }

  return message;
}

console.log(camelCase('this is a string'));
console.log(camelCase('loopy lighthouse'));
console.log(camelCase("supercalifragalisticexpialidocious"));