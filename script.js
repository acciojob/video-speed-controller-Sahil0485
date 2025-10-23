// Select DOM elements
const video = document.querySelector('.viewer');
const playButton = document.querySelector('.player__button');
const progressBar = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');
const volumeControl = document.querySelector('.volume');
const speedControl = document.querySelector('.speed');
const skipButtons = document.querySelectorAll('.skip');

// Toggle play/pause functionality
playButton.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playButton.textContent = '❚ ❚'; // Change to pause symbol
    } else {
        video.pause();
        playButton.textContent = '►'; // Change to play symbol
    }
});

// Update progress bar as the video plays
video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.value = progress;
    progressFilled.style.width = `${progress}%`;
});

// Scrub through the video when the progress bar is changed
progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * video.duration;
    video.currentTime = seekTime;
});

// Volume control functionality
volumeControl.addEventListener('input', () => {
    video.volume = volumeControl.value;
});

// Playback speed control functionality
speedControl.addEventListener('input', () => {
    video.playbackRate = speedControl.value;
});

// Skip buttons functionality
skipButtons.forEach(button => {
    button.addEventListener('click', () => {
        video.currentTime += parseFloat(button.dataset.skip);
    });
});
