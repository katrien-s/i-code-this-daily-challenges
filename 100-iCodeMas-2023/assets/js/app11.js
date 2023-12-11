const closeContainerBtn = document.getElementById('close-btn');
const giftContainer = document.querySelector('.gift-container');
const giftItems = document.querySelectorAll('.gift-item');

closeContainerBtn.addEventListener('click', function () {
	giftContainer.style.opacity = '0';

	setTimeout(function () {
		giftContainer.style.display = 'none';
	}, 1000);

	setTimeout(fadeInContainer, 2000);
});

function fadeInContainer() {
	giftContainer.style.display = 'flex';
	void giftContainer.offsetWidth;
	giftContainer.style.opacity = '1';
}

giftItems.forEach((gift) => {
	const inputGiftAmount = document.getElementById('gift-amount');
	gift.addEventListener('click', function () {
		inputGiftAmount.value = '$' + gift.dataset.value;
	});
});
