let prompt = require("prompt-sync")();

let randomNumber = Math.floor(Math.random() * 10); // Integer 0 ~ 99
console.log(randomNumber);
let times = 1;
let answer = Number(prompt("Guess a number: "));
let arrayOftries = [];

while (true) {
  if (Number.isNaN(answer)) {
    console.log('Not a number! Try again!');
  } else if (arrayOftries.includes(answer)) {
      console.log('Already Guessed');
  } else {
    arrayOftries.push(answer);
    if (answer < randomNumber) {
    console.log('Too Low!');
    times++;
    } else if (answer > randomNumber) {
    console.log('Too High!');
    times++;
    } else if (answer = randomNumber) {
    console.log(`You got it! You took ${times} attempts!`);
    break;
    }
  }
  console.log(arrayOftries);
  answer = Number(prompt("Guess a number: "));
}
