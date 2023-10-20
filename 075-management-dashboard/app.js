const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

const currentTime = document.getElementById('current-time');
const currentDay = document.getElementById('current-day');

const today = new Date();
const hours = today.getHours();
const minutes = ('0' + today.getMinutes()).slice(-2);
const month = months[today.getMonth()];
const day = today.getDate();

currentTime.textContent = `${hours}:${minutes}`;
currentDay.textContent = `${day} ${month}`;