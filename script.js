'use strict';

//console.log(document.querySelector('.message').textContent);
//document.querySelector('.message').textContent = 'Test';

document.querySelector('.between').textContent = 'Between 0 and 20';

/* function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const targetNumber = randomIntFromInterval(1, 19); */

let targetNumber = Math.round(Math.random() * 20, 0);
console.log(targetNumber);
//document.querySelector('.number').textContent = targetNumber;
let score = 20;
let highScore = 0;
//document.querySelector('.score').textContent = 20;

document.querySelector('.check').addEventListener('click', function () {
  let guessNumber_1 = document.querySelector('.guess').value;
  let guessNumber = guessNumber_1 === '' ? 'null' : Number(guessNumber_1);
  console.log(guessNumber);
  //console.log(document.querySelector('.guess').value);
  if (guessNumber < 0 || guessNumber > 20) {
    document.querySelector('.message').textContent =
      'Enter between the range';
    return;
  }
  if (score <= 0) {
    document.querySelector('.message').textContent = 'You Lose';
    //document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#FF0000';
    return;
  } else if (guessNumber === 'null') {
    document.querySelector('.message').textContent = 'No number provided';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guessNumber === targetNumber) {
    document.querySelector('.message').textContent = 'You win';
    document.querySelector('body').style.backgroundColor = '#228B22';
    document.querySelector('.number').textContent = targetNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
      console.log(score, highScore);
    }
  } else if (guessNumber > targetNumber) {
    document.querySelector('.message').textContent = 'Guess too high';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guessNumber < targetNumber) {
    document.querySelector('.message').textContent = 'Guess too low';
    score--;
    document.querySelector('.score').textContent = score;
  }
  if (score === 0) {
    document.querySelector('.message').textContent = 'You Lose';
    //document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#FF0000';
    return;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  targetNumber = Math.round(Math.random() * 20, 0);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
});
