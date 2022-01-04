'use strict';

//selecting elements
const score0El = document.querySelector('#score--0');
const socre1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');

console.log(buttonRoll);

//starting conditions
score0El.textContent = 0;
socre1El.textContent = 0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  //generating a random number
  let randomNumb = Math.trunc(Math.random() * 6 + 1);
  console.log('the random number is', randomNumb);

  switch (randomNumb) {
    case 1:
      diceEl.src = 'dice-1.png';
      break;
    case 2:
      diceEl.src = 'dice-2.png';
      break;
    case 3:
      diceEl.src = 'dice-3.png';
      break;
    case 4:
      diceEl.src = 'dice-4.png';
      break;
    case 5:
      diceEl.src = 'dice-5.png';
      break;
    case 6:
      diceEl.src = 'dice-6.png';
      break;
  }
});

//diceEl.getElementByClassName('');
