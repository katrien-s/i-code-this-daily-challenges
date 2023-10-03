const dismissBtn = document.getElementById('dismiss-btn');
let announcementCardArray = document.querySelectorAll('.announcement-card');
const totalAnnouncements = document.getElementById('total-announcements');
const container = document.querySelector('.container');
const deleteMessageBtn = document.querySelectorAll('button[data-type="naked"');

dismissBtn.addEventListener('click', function () {
	announcementCardArray.forEach(function (card) {
		card.style.display = 'none';
		announcementCardArray--;
	});
	totalAnnouncements.textContent = 'No';

	const addText = document.createElement('p');
	container.insertBefore(addText, dismissBtn);
	addText.classList.add('show-on-empty');
	addText.textContent = `You're all up to date`;
	dismissBtn.disabled = true;
});

deleteMessageBtn.forEach(function (button) {
	button.addEventListener('click', function (e) {
		announcementCardArray.forEach(function (card) {
			console.log('button', e.target.parentElement.parentElement);
			if (card === button.parentElement.parentElement) {
				card.style.display = 'none';
				announcementCardArray--;
			}
		});
	});
});
