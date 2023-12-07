const hour = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let isPaused = false;
let elapsedTime = 0,
  startTime,
  timerInterval,
  seconds;

start.addEventListener("click", startTimer);
stop.addEventListener("click", pauseTimer);
reset.addEventListener("click", resetTimer);

function startTimer() {
  seconds = +(hour.value * 3600) + +(min.value * 60) + +sec.value;
  if (!isPaused) {
    startTime = seconds - elapsedTime;
    timerInterval = setInterval(updateTimer, 1000);
    isPaused = true;
  }
}

function updateTimer() {
  elapsedTime = seconds - --startTime;
  showRemainingTime(seconds - elapsedTime);
}

function pauseTimer() {
  if (isPaused) {
    clearInterval(timerInterval);
    isPaused = false;
  }
}

function showRemainingTime(seconds) {
  if (seconds < 0) "";
  else {
    document.getElementById("hour").innerText = `${Math.floor(
      seconds / 3600
    )} h : `;
    document.getElementById("minute").innerText = `${
      Math.floor(seconds / 60) % 60
    } m : `;
    document.getElementById("second").innerText = `${Math.floor(
      seconds % 60
    )} s`;
  }
}
