let intervalIndex = 0;
let isStarted = false;
let timeInSeconds = 0;
let timeInMilliseconds = 0;
let isPaused = false;

document.querySelector('.js-start-button').
  addEventListener('click', () => start());

document.querySelector('.js-pause-button').
  addEventListener('click', () => pause());

document.querySelector('.js-reset-button').
  addEventListener('click', () => reset());

function start() {
  if (!isStarted) {
    intervalIndex = setInterval(() => {
      increaseTime();
    }, 100);
    isStarted = true;
  }
}

function pause() {
  if (isPaused) {
    start();
    isPaused = false;
  } else if (isStarted) {
    clearInterval(intervalIndex);
    isStarted = false;
    isPaused = true;
  }
}

function reset() {
  parseTime(0, 0);
  timeInSeconds = 0;
  timeInMilliseconds = 0;
}

function increaseTime() {
  let minutes;
  let seconds;

  timeInMilliseconds += 100;

  if(timeInMilliseconds === 1000) {
    timeInSeconds++;
    
    minutes = Math.floor(timeInSeconds / 60);
    seconds = timeInSeconds % 60;

    parseTime(minutes, seconds);

    timeInMilliseconds = 0;
  }
}

function parseTime(minutes, seconds) {
  const divElement = document.querySelector('.js-stopwatch-time');
  
  if (minutes < 10 & seconds < 10) {
    divElement.innerHTML = '0' + String(minutes) + ':0' + String(seconds);
  } else if (minutes < 10) {
    divElement.innerHTML = '0' + String(minutes) + ':' + String(seconds);
  } else if (seconds < 10) {
    divElement.innerHTML = String(minutes) + ':0' + String(seconds);
  } else {
    divElement.innerHTML = String(minutes) + ':' + String(seconds);
  }
}