const mealCardsContainer = document.getElementById('meal-cards-container');
const horizontalView = document.getElementById('horizontal-display');
const verticalView = document.getElementById('vertical-display');

verticalView.addEventListener('click', function () {
	verticalView.classList.toggle('active');
	mealCardsContainer.classList.remove('horizontal-display');
	if (verticalView.classList.contains('active')) {
		horizontalView.classList.remove('active');
	}
});

horizontalView.addEventListener('click', function () {
	horizontalView.classList.toggle('active');
	mealCardsContainer.classList.add('horizontal-display');
	if (horizontalView.classList.contains('active')) {
		verticalView.classList.remove('active');
	}
});
