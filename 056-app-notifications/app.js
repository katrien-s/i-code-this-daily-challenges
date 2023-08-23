const viewAllBtn = document.getElementById('view-all-btn');
const messages = document.querySelectorAll('.message');

viewAllBtn.addEventListener('click', function () {
	let inactiveMessages = [];
	messages.forEach(function (message) {
		if (message.classList.contains('inactive')) {
			inactiveMessages.push(message);
			message.classList.remove('inactive');
			viewAllBtn.textContent = 'All\'s been read';
		}
	});
});
