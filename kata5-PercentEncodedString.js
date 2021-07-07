const urlEncode = function(text) {
  let output = '';
  let newText = text.trim();

  for (let i = 0; i < newText.length; i++) {
    if (newText[i] === ' ') {
      output += '%20';
    } else {
      output += newText[i];
    }
  }
  return output;
}

console.log(urlEncode('Lighthouse Labs'));
console.log(urlEncode(' Lighthouse Labs '));
console.log(urlEncode('blue is greener than purple for sure'));
