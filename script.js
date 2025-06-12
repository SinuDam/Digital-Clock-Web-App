const timeEl = document.getElementById('time');
const ampmEl = document.getElementById('ampm');
const dateEl = document.getElementById('date');
const formatToggle = document.getElementById('formatToggle');
const themeBtn = document.getElementById('themeBtn');

let is24Hour = false;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = pad(now.getMinutes());
  const seconds = pad(now.getSeconds());
  const ampm = hours >= 12 ? 'PM' : 'AM';

  if (!is24Hour) {
    hours = hours % 12 || 12;
  }

  const displayHours = pad(hours);

  timeEl.innerText = `${displayHours}:${minutes}:${seconds}`;
  ampmEl.innerText = is24Hour ? '' : ampm;

  // Date
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateEl.innerText = now.toLocaleDateString(undefined, options);
}

function pad(num) {
  return num.toString().padStart(2, '0');
}

// Toggle 12/24 hour
formatToggle.addEventListener('change', () => {
  is24Hour = formatToggle.checked;
  updateClock();
});

// Theme toggle
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.innerText = document.body.classList.contains('dark') ? '🌙' : '🌞';
});

// Update clock every second
setInterval(updateClock, 1000);
updateClock();
