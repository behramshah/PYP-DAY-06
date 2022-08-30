const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');
const timer = document.getElementById('timer');

function enableButtons () {
    stopButton.removeAttribute('disabled');
    resetButton.removeAttribute('disabled');
}

let isCounting = false;
let time = 0;
let timerID;

function countUp() {
    time++;
    let min = Math.floor(time / 100 / 60);
    let sec = Math.floor(time / 100);
    if (sec >= 60) sec = sec % 60;
    let milSec = Math.floor(time % 100);
  
    let timeStr = `${min > 9 ? min : "0" + min}:${sec > 9 ? sec : "0" + sec}:${
      milSec > 9 ? milSec : "0" + milSec
    }`;
  
    timeDisplay.textContent = timeStr;
  }

startButton.addEventListener('click', startTimer);