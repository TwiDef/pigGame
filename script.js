'use strict';

// Elements selection
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const diceElement = document.querySelector('.dice');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

// Current, Total score, active player, game flague
let currentScore, activePlayer, totalScores, isPlaying;

// Players current score
const current0Element = document.querySelector('#current--0');
const current1Element = document.querySelector('#current--1');

// Buttons
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Default setting
function setStartingState() {
    score0Element.textContent = 0;
    score1Element.textContent = 0;
    current0Element.textContent = 0;
    current1Element.textContent = 0;
    player0Element.classList.remove('player--winner');
    player1Element.classList.remove('player--winner');
    player0Element.classList.remove('player--active');
    player1Element.classList.remove('player--active');

    if (!player0Element.classList.contains('player--active')) {
        player0Element.classList.add('player--active');
    }
    diceElement.classList.add('hidden');
    isPlaying = true;
    currentScore = 0;
    activePlayer = 0;
    totalScores = [0, 0];
}

setStartingState();

// Switch active player
const switchActivePlayer = function() {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
};

// Roll the dice
btnRoll.addEventListener('click', () => {
    if (isPlaying) {
        const diceNumber = Math.trunc(Math.random() * 6) + 1;

        diceElement.classList.remove('hidden');
        diceElement.src = `dice${diceNumber}.png`;

        if (diceNumber !== 1) {
            currentScore += diceNumber;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchActivePlayer();
        }
    }
});


btnHold.addEventListener('click', () => {
    if (isPlaying) {
        totalScores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = totalScores[activePlayer];

        if (totalScores[activePlayer] >= 100) {
            isPlaying = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceElement.classList.add('hidden');
        } else {
            switchActivePlayer();
        }
    }
});

btnNew.addEventListener('click', () => setStartingState());