const video = document.querySelector('.video');
const player = document.querySelector('.player');

const playBtn = document.querySelector('.play-btn');
const stopBtn = document.querySelector('.stop-btn');
const fullscreenBtn = document.querySelector('.fullscreen');

const progressRange = document.querySelector('.progress-range');
const progressBar = document.querySelector('.progress-bar');
const volumeRange = document.querySelector('.volume-range');
const volumeBar = document.querySelector('.volume-bar');
const volumeIcon = document.querySelector('volume-icon');
const timeElapsed = document.querySelector('.time-elapsed');
const timeDuration = document.querySelector('.time-duration');

// Play/Pause
const showPauseIcon = () => {
	playBtn.classList.replace('fa-play', 'fa-pause');
	playBtn.setAttribute('title', 'Pause');
};

const showPlayIcon = () => {
	playBtn.classList.replace('fa-pause', 'fa-play');
	playBtn.setAttribute('title', 'Play');
};

const togglePlay = () => {
	if (video.paused) {
		video.play();
		showPauseIcon();
	} else {
		video.pause();
		showPlayIcon();
	}
};

const stopPlay = () => {
	!video.paused ? video.pause() : video.play();
	showPlayIcon();
};

playBtn.addEventListener('click', togglePlay);
stopBtn.addEventListener('click', stopPlay);
video.addEventListener('ended', showPlayIcon);

// Progress Bar
const displayTime = (time) => {
	const minutes = Math.floor(time / 60);
	let seconds = Math.floor(time % 60);
	seconds = seconds > 9 ? seconds : `0${seconds}`;
	return `${minutes}:${seconds}`;
};

const updateProgress = () => {
	progressBar.style.width = `${(video.currentTime / video.duration) * 100}%`;
	timeElapsed.textContent = `${displayTime(video.currentTime)}`;
	timeDuration.textContent = `${displayTime(
		video.duration - video.currentTime
	)}`;
};

const setProgress = (e) => {
	const newTime = e.offsetX / progressRange.offsetWidth;
	progressBar.style.width = `${newTime * 100}%`;
	video.currentTime = newTime * video.duration;
};

video.addEventListener('timeupdate', updateProgress);
video.addEventListener('canplay', updateProgress);
progressRange.addEventListener('click', setProgress);

// Volume Controls
let lastVolume = 1;

const changeVolume = (e) => {
	let volume = e.offsetX / volumeRange.offsetWidth;
	if (volume < 0.1) {
		volume = 0;
	}
	if (volume > 0.9) {
		volume = 1;
	}

	volumeBar.style.width = `${volume * 100}%`;
	video.volume = volume;
	lastVolume = volume;
};

volumeRange.addEventListener('click', changeVolume);

// Fullscreen
/* View in fullscreen */
function openFullscreen(elem) {
	if (elem.requestFullscreen) {
		elem.requestFullscreen();
	} else if (elem.webkitRequestFullscreen) {
		/* Safari */
		elem.webkitRequestFullscreen();
	} else if (elem.msRequestFullscreen) {
		/* IE11 */
		elem.msRequestFullscreen();
	}
	video.classList.add('video-fullscreen');
}

/* Close fullscreen */
function closeFullscreen() {
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.webkitExitFullscreen) {
		/* Safari */
		document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) {
		/* IE11 */
		document.msExitFullscreen();
	}
	video.classList.remove('video-fullscreen');
}

let fullscreen = false;

const toggleFullscreen = () => {
	!fullscreen ? openFullscreen(player) : closeFullscreen();
	fullscreen = !fullscreen;
};

fullscreenBtn.addEventListener('click', toggleFullscreen);
