let clockInterval;

function showTime() {
  const now = new Date();
  document.getElementById("clock").innerText = now.toString();
}

function startClock() {
  if (!clockInterval) {
    showTime(); // Show immediately
    clockInterval = setInterval(showTime, 1000);
  }
}

function stopClock() {
  clearInterval(clockInterval);
  clockInterval = null;
}
