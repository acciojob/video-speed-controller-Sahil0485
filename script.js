// Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.player__video'); // updated selector
const toggle = player.querySelector('.toggle');
const progress = player.querySelector('.progress');
const progressFilled = player.querySelector('.progress__filled');
const skipButtons = player.querySelectorAll('[data-skip]');
const volumeSlider = player.querySelector('.volume');
const speedSlider = player.querySelector('.playbackSpeed');

// Toggle play/pause
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

// Update play/pause icon
function updateButton() {
  const icon = video.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

// Skip video by given seconds
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// Handle range updates (volume / playbackSpeed)
function handleRangeUpdate() {
  if (this.name === 'volume') {
    video.volume = this.value;
  } else if (this.name === 'playbackSpeed') {
    video.playbackRate = this.value;
  }
}

// Update progress bar
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressFilled.style.width = `${percent}%`;
}

// Scrub (click progress bar to change time)
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
volumeSlider.addEventListener('input', handleRangeUpdate);
speedSlider.addEventListener('input', handleRangeUpdate);
progress.addEventListener('click', scrub);
