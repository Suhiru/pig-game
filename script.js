'use strict';

//selecting elements
const score0El = document.querySelector('#score--0');
const socre1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

console.log(player0El);
console.log(player1El);

//current score variable
let currentScore = 0;

//score variable
let score0 = 0;
let score1 = 0;

//Active player variable
let activePlayer = 0;

//starting conditions
score0El.textContent = score0;
socre1El.textContent = score1;
diceEl.classList.add('hidden');

//Rolling the dice funtionality
btnRoll.addEventListener('click', function () {
  //generating a random number
  let dice = Math.trunc(Math.random() * 6) + 1;
  console.log('the random number is', dice);

  //display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  if (!activePlayer) {
    if (dice !== 1) {
      currentScore += dice;
      currentScore0El.textContent = currentScore; //change later
    } else {
      currentScore = 0;
      currentScore0El.textContent = currentScore;

      //changing CSS style to indicate active player
      player0El.classList.remove('player--active');
      player1El.classList.add('player--active');

      //and switch to the next player
      activePlayer = 1;
    }
  } else {
    if (dice !== 1) {
      currentScore += dice;
      currentScore1El.textContent = currentScore; //change later
    } else {
      currentScore = 0;
      currentScore1El.textContent = currentScore;

      //changing CSS style to indicate active player
      player0El.classList.add('player--active');
      player1El.classList.remove('player--active');

      //and switch to the next player
      activePlayer = 0;
    }
  }
});

btnHold.addEventListener('click', function () {
  if (!activePlayer) {
    //storing the score and changing the active player
    score0 += currentScore;
    score0El.textContent = score0;
    currentScore = 0;
    currentScore0El.textContent = currentScore;
    activePlayer = 1;

    //changing the active player CSS style
    player1El.classList.add('player--active');
    player0El.classList.remove('player--active');
  } else {
    //storing the score and changing the active player
    score1 += currentScore;
    socre1El.textContent = score1;
    currentScore = 0;
    currentScore1El.textContent = currentScore;
    activePlayer = 0;

    //changing the active player CSS style
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
  }
});

btnNew.addEventListener('click', function () {
  // setting all score variables to 0
  score0 = 0;
  score1 = 0;
  currentScore = 0;

  //hiding the dice
  diceEl.classList.add('hidden');

  //displaying the scores for both players
  score0El.textContent = score0;
  socre1El.textContent = score1;
  currentScore0El.textContent = currentScore;
  currentScore1El.textContent = currentScore;

  //setting the active player CSS
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
});
