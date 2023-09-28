const menuDetailsText = document.getElementById('menu-details-text');
const readMoreBtn = document.querySelector('button[data-type="action-btn"]');

readMoreBtn.addEventListener('click', function () {
	if (
		menuDetailsText.textContent ===
		'Ice cream bonbon sugar plum pudding dragée muffin marzipan gummi bears gingerbread.'
	) {
		menuDetailsText.textContent =
			'Forest Fruit Pie is the perfect pie recipe. This homemade pie is full of apples, rhubarb, strawberries, raspberries and blueberries or blackberries. A perfect make-ahead dessert for your Saturday night dinner! The Forest Fruit Pie is best served warm with ice cream or custard!';
	} else {
		menuDetailsText.textContent = `Ice cream bonbon sugar plum pudding dragée muffin marzipan gummi bears gingerbread.`;
	}
});
