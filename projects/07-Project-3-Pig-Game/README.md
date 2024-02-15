document.getElementById('score--1');
document.querySelector('.dice').src = `dice-${dice}.png`;
const dice = Math.trunc(Math.random() \* 6) + 1;
document.getElementById(`current--${activePlayer}`).textContent = 0;
player0El.classList.toggle('player--active');
