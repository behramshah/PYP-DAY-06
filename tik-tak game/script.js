let turn = document.getElementById('game-heading');

document.addEventListener('click', event => {

  if(turn.innerHTML.includes('Players 1') && !event.target.innerHTML) {
    event.target.innerHTML = 'X';
    event.target.className = '.game-square:disabled';
    turn.innerHTML = `Players 2's Turn`
  } else if (!event.target.innerHTML) {
    event.target.innerHTML = 'O';
    event.target.className = '.game-square:disabled';
    turn.innerHTML = `Players 1's Turn`
  }
})