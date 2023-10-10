const toggleButtons = document.querySelectorAll('.toggle-option .btn');
const groupCardsContainer = document.getElementById('group-cards');

toggleButtons.forEach((button) => {
	button.addEventListener('click', () => {
		toggleButtons.forEach((btn) => {
			if (btn === button) {
				btn.setAttribute('data-active', 'true');
			} else {
				btn.setAttribute('data-active', 'false');
			}
		});

		if (button.dataset.selected === 'grid') {
			groupCardsContainer.classList.add('group-cards-grid');
			groupCardsContainer.classList.remove('group-cards-list');
		}

		if (button.dataset.selected === 'list') {
			groupCardsContainer.classList.add('group-cards-list');
			groupCardsContainer.classList.remove('group-cards-grid');
		}
	});
});
