'use strict';

// Elements selection
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const diceElement = document.querySelector('.dice');

// Current score
let currentScore = 0;

// Players current crose
const current0Element = document.querySelector('#current--0');
const current1Element = document.querySelector('#current--1');

// Buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Game initial conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

// Roll the dice
btnRoll.addEventListener('click', () => {
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    diceElement.classList.remove('hidden');
    diceElement.src = `dice${diceNumber}.png`;

    if (diceNumber !== 1) {
        currentScore += diceNumber;
        current0Element.textContent = currentScore;
    }
});