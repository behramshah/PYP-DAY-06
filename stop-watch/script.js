const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const resetButton = document.getElementById('reset-button');
const timer = document.getElementById('timer');
const stopwatch = { elapsedTime: 0 }

function onClickStart () {
    stopButton.removeAttribute('disabled');
    resetButton.removeAttribute('disabled');
    startButton.setAttribute('disabled', true)
}

function onClickStop () {
  stopButton.setAttribute('disabled', true);
  resetButton.removeAttribute('disabled');
  startButton.removeAttribute('disabled');
}

function onClickReset () {
  startButton.removeAttribute('disabled');
  stopButton.setAttribute('disabled', true);
  resetButton.setAttribute('disabled', true);
}

function startStopwatch() {  
  stopwatch.startTime = Date.now();
  stopwatch.intervalId = setInterval(() => {
    const elapsedTime = Date.now() - stopwatch.startTime + stopwatch.elapsedTime
    const milliseconds = parseInt((elapsedTime%1000)/10)
    const seconds = parseInt((elapsedTime/1000)%60)
    const minutes = parseInt((elapsedTime/(1000*60))%60)
    const hour = parseInt((elapsedTime/(1000*60*60))%24);
    displayTime(hour, minutes, seconds, milliseconds)
  }, 100);
}

function displayTime(hour, minutes, seconds, milliseconds) {
  const leadZeroTime = [hour, minutes, seconds, milliseconds].map(time => time < 10 ? `0${time}` : time)
  timer.innerHTML = leadZeroTime.join(':')
}

startButton.addEventListener('click', () => {
  onClickStart();
  startStopwatch();
});

stopButton.addEventListener('click', () => {
  onClickStop();   
  stopwatch.elapsedTime += Date.now() - stopwatch.startTime
  clearInterval(stopwatch.intervalId)
});

resetButton.addEventListener('click', () => {
  onClickReset();
  stopwatch.elapsedTime = 0
  stopwatch.startTime = Date.now()
  displayTime(0, 0, 0, 0)
})