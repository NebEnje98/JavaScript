let playerTurn = 0;
let isPlayable = [];
let result = [];

for (let i = 0; i < 9; i++) {
  isPlayable.push(true);
  result.push('');
}

document.querySelector('.js-play-field1')
  .addEventListener('click', () => {
    playTurn(0);
  });

document.querySelector('.js-play-field2')
  .addEventListener('click', () => {
    playTurn(1);
  });

document.querySelector('.js-play-field3')
  .addEventListener('click', () => {
    playTurn(2);
  });

document.querySelector('.js-play-field4')
  .addEventListener('click', () => {
    playTurn(3);
  });

document.querySelector('.js-play-field5')
  .addEventListener('click', () => {
    playTurn(4);
  });

document.querySelector('.js-play-field6')
  .addEventListener('click', () => {
    playTurn(5);
  });

document.querySelector('.js-play-field7')
  .addEventListener('click', () => {
    playTurn(6);
  });

document.querySelector('.js-play-field8')
  .addEventListener('click', () => {
    playTurn(7);
  });

document.querySelector('.js-play-field9')
  .addEventListener('click', () => {
    playTurn(8);
  });

function playTurn(position) {
  if (playerTurn === 0 & isPlayable[position]) {
    document.querySelector(`.js-play-field${position+1}`).innerHTML = 'X';
    playerTurn = 1;
    isPlayable[position] = false;
    result[position] = 'X';
  } else if (isPlayable[position]) {
    document.querySelector(`.js-play-field${position+1}`).innerHTML = 'O';
    playerTurn = 0;
    isPlayable[position] = false;
    result[position] = 'O';
  }

  setTimeout(() => {
    checkWin();
  }, 50);
}

function checkWin() {

  let winnerText = '';
  let isWon = false;

  for (let i = 0; i < 3; i++) {
    let row = i*3;
    
    if (result[row] === result[row+1] & result[row] === result[row+2] & result[row] !== '') {
      winnerText = `Winner: ${result[row]}`;
      isWon = true;
    }

    if (result[i] === result[i+3] & result[i] === result[i+6] & result[i] !== '') {
      winnerText = `Winner: ${result[i]}`;
      isWon = true;
    }
  }

  if (result[0] === result[4] & result[0] === result[8] & result[0] !== '') {
    winnerText = `Winner: ${result[0]}`;
    isWon = true;
  }

  if (result[2] === result[4] & result[2] === result[6] & result[2] !== '') {
    winnerText = `Winner: ${result[2]}`;
    isWon = true;
  }

  if (isWon) {
    alert(winnerText);
    resetPlay();
    winnerText = '';
    isWon = false;
  }
}

function resetPlay() {
  playerTurn = 0;
  isPlayable = [];
  result = [];

  for (let i = 0; i < 9; i++) {
    isPlayable.push(true);
    result.push('');
    document.querySelector(`.js-play-field${i+1}`).innerHTML = '';
  }
}