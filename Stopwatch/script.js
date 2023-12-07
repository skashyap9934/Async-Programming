const start_button = document.getElementById("start-button");
const stop_button = document.getElementById("stop-button");
const reset_button = document.getElementById("reset-button");
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const milli_sec = document.getElementById("mil-sec");

let isPaused = false;
let elapsedTime = 0,
  startTime,
  stopwatchInterval;

let secVal, minVal, hourVal;

start_button.addEventListener("click", () => startStopwatch());
stop_button.addEventListener("click", () => stopStopwatch());
reset_button.addEventListener("click", () => resetStopwatch());

function startStopwatch() {
  if (!isPaused) {
    startTime = Date.now() - elapsedTime;
    stopwatchInterval = setInterval(updateStopwatch, 10);
    isPaused = true;
  }
}

function stopStopwatch() {
  if (isPaused) {
    clearInterval(stopwatchInterval);
    isPaused = false;
  }
}

function resetStopwatch() {
  stopStopwatch();
  elapsedTime = 0;
  startTime = Date.now() - elapsedTime;
  updateStopwatch();
}

function updateStopwatch() {
  const current_time = Date.now();
  elapsedTime = current_time - startTime;
  showTime(elapsedTime);
}

function showTime(milliSeconds) {
  secVal = Math.floor((milliSeconds % (60 * 1000)) / 1000);
  minVal = Math.floor(milliSeconds / (60 * 1000) % 60);
  hourVal = Math.floor(milliSeconds / (60 * 1000 * 60));
  milli_sec.innerText = `${milliSeconds % 1000}`;
  sec.innerText = `${secVal} s`;
  min.innerText = `${minVal} m`;
  hour.innerText = `${hourVal} h`;
  if (minVal > 0) min.style.display = "inline";
  else min.style.display = "none";
  if (hourVal > 0) hour.style.display = "inline";
  else hour.style.display = "none";
}
