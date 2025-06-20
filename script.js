function setBackground(type) {
  const body = document.body;
  if (type === 'galaxy') {
    body.style.backgroundImage = "url('galaxy.gif')";
  } else if (type === 'rain') {
    body.style.backgroundImage = "url('rain.gif')";
  }
}

function updateClock() {
  const clock = document.getElementById('clock');
  const now = new Date();
  const timeStr = now.toLocaleTimeString();
  clock.textContent = timeStr;
}

setInterval(updateClock, 1000);
updateClock();
