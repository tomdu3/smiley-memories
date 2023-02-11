// Inspiration and instruction from Florin Pop's video: Simple Countdown Timer with JavaScript - Day 21
// My mentor Koko showed me the right way to use clearInferval and intervalId

//timer function
function timer() {

  // restart timer
  if (currentTimeIntervalId) {
    clearInterval(currentTimeIntervalId);
  }
  let timerElement = document.getElementById('timer');

  // reset colour
  timerElement.style.color = '';
  let currentTime = startTime;

  // Function to update the timer display
  function updateTimer() {
    if (!timerOn) {
      return;
    }

    // calculate seconds to appear in format min:secs
    let min = Math.floor(currentTime / 60);
    let sec = currentTime % 60;
    let minString = `${min}`;
    let secString = `${sec}`;

    // ad a 0 to the seconds of the value less than 10
    if (sec < 10) {
      secString = `0${secString}`;
    }
    timerElement.textContent = `${minString}:${secString}`;

    // timer colour turns to red when below or equal to 10
    if (currentTime <= 10) {
      timerElement.style.color = 'red';
    }
    // if time is up, end game losing
    if (currentTime === 0) {
      endGameLose();
      timerOn = false;
      return;
    }

    currentTime--;
  }

  // Start the timer
  currentTimeIntervalId = setInterval(updateTimer, 1000);
}

function pauseTimer() {
  timerOn = false;
}

function resumeTimer() {
  timerOn = true;
}