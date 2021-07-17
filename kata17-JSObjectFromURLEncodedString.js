const urlDecode = function(text) {

  let arrayOfPairs = text.replaceAll('%20', ' ').split('&')
  let output = {};

  for (let i = 0; i < arrayOfPairs.length; i++) {
    let arrayWithoutEqualsSign = arrayOfPairs[i].split('=');;
    output[arrayWithoutEqualsSign[0]] = arrayWithoutEqualsSign[1];
  }
  return output;
}



console.log(urlDecode('duck=rubber'));
console.log(urlDecode('bootcamp=Lighthouse%20Labs'));
console.log(urlDecode('city=Vancouver&weather=lots%20of%20rain'));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);