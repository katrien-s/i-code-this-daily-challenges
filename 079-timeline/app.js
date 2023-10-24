const buttonEl = document.querySelector('.btn');

buttonEl.addEventListener('click', function () {
	const timelineCards = document.querySelectorAll('.timeline-card');
	timelineCards.forEach((card) => {
		card.removeAttribute('hidden');
	});
});
