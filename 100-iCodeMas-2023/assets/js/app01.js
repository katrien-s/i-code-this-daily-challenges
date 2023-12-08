const countdownInterval = setInterval(countdownDays, 1000);

function countdownDays() {
	const targetDate = new Date('Dec 25, 2023 0:00:00').getTime();
	const currentDate = new Date().getTime();
	const timeDifference = targetDate - currentDate;

	const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

	document.getElementById('days').textContent = days;
	document.getElementById('hours').textContent = hours;
	document.getElementById('minutes').textContent = minutes;
	document.getElementById('seconds').textContent = seconds;
}
