const bookASpotBtn = document.querySelectorAll(".button[data-type='swipe']");
const toggleBtn = document.querySelector(".button[data-type='toggle']");

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

const date = document.getElementById('date');

bookASpotBtn.forEach(function (button) {
	button.addEventListener('click', function (e) {
		// console.log(e.target.parentElement.dataset.training);
		button.disabled = true;
		button.classList.add('disabled');
		button.style.backgroundColor = 'limegreen';
		button.style.color = 'white';
		button.innerText = 'Booked';
	});
});

toggleBtn.addEventListener('click', function () {
	const activityCards = document.querySelector('.activity-cards');
	activityCards.classList.toggle('hidden');
});

const tempDate = new Date();
const tempMonth = tempDate.getMonth();
const tempDay = tempDate.getDate();
const month = months[tempMonth];
date.textContent = `${month} ${tempDay}`;
