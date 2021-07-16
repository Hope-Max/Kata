const makeCase = function(input, styles) {
  let casingStyle = '';
  if (typeof(styles) === 'object') {
    for (let style of styles) {
      casingStyle += style;
    }
  } else {
    casingStyle = styles;
  }

  let formula = {
    'camel': camel(input),
    'pascal': pascal(input),
    'snake': snake(input),
    'kebab': kebab(input),
    'title': title(input),
    'vowel': vowel(input),
    'consonant': consonant(input),
    'upper': upper(input),
    'uppersnake': snake(upper(input))
  };
  return formula[casingStyle];
}

const camel = function(input) {
  let listOfWords = input.split(' ');
  let output = ''

  output += listOfWords[0];

  for (let i = 1; i < listOfWords.length; i++) {
    firstLetter = listOfWords[i][0].toUpperCase();
    newWord = firstLetter + listOfWords[i].slice(1);
    output += newWord;
  }
  return output;
}

const pascal = function(input) {
  let listOfWords = input.split(' ');
  let output = ''

  for (let i = 0; i < listOfWords.length; i++) {
    firstLetter = listOfWords[i][0].toUpperCase();
    newWord = firstLetter + listOfWords[i].slice(1);
    output += newWord;
  }
  return output;
}

const snake = function(input) {
  let output = input.replaceAll(' ', '_');
  return output;
}

const kebab = function(input) {
  let output = input.replaceAll(' ', '-');
  return output;
}

const title = function(input) {
  let listOfWords = input.split(' ');
  let output = ''

  firstLetter = listOfWords[0][0].toUpperCase();
  newWord = firstLetter + listOfWords[0].slice(1);
  output += newWord;

  for (let i = 1; i < listOfWords.length; i++) {
    firstLetter = listOfWords[i][0].toUpperCase();
    newWord = firstLetter + listOfWords[i].slice(1);
    output += ' ' + newWord;
  }
  return output;
}

const vowel = function(input) {
  let output = '';

  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
      output += input[i].toUpperCase();
    } else {
      output += input[i]
    }
  }
  return output;
}

const consonant = function(input) {
  let output = '';

  for (let i = 0; i < input.length; i++) {
    if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
      output += input[i];
    } else {
      output += input[i].toUpperCase()
    }
  }
  return output;
}

const upper = function(input) {
  let output = input.toUpperCase();
  return output;
}

console.log(makeCase('this is a string', 'camel'));
console.log(makeCase('this is a string', 'pascal'));
console.log(makeCase('this is a string', 'snake'));
console.log(makeCase('this is a string', 'kebab'));
console.log(makeCase('this is a string', 'title'));
console.log(makeCase('this is a string', 'vowel'));
console.log(makeCase('this is a string', 'consonant'));
console.log(makeCase('this is a string', 'upper'));
console.log(makeCase('this is a string', ['upper','snake']));