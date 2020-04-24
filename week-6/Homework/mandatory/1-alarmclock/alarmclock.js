function setAlarm() {
  const numberOfSecond = parseInt(document.getElementById("alarmSet").value);
  if (isNaN(numberOfSecond)) {
    alert("please enter number");
  } else {
    let timeLeft = numberOfSecond;
    updateTime(timeLeft);
    const timer = setInterval(function () {
      timeLeft = timeLeft - 1;
      if (timeLeft === 0) {
        playAlarm();
        clearInterval(timer);
      }
      updateTime(timeLeft);
    }, 1000);
  }
}
function updateTime(timeLeft) {
  const timeBox = document.getElementById("timeRemaining");
  timeBox.textContent = `Time Remaining: 00:${timeLeft}`;
}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
