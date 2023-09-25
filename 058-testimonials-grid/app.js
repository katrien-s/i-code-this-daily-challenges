const displayExtraBtn = document.getElementById('display-extra-btn');
const testimonialCard = document.querySelectorAll(
	'.testimonial-card[data-show="on-click"]'
);
const toggleMenuBtn = document.getElementById('toggle-menu-btn');
const toggleMenu = document.getElementById('toggle-menu');

toggleMenuBtn.addEventListener('click', function () {
	toggleMenu.classList.toggle('open-menu');
});

displayExtraBtn.addEventListener('click', function () {
	displayExtraBtn.style.display = 'none';

	testimonialCard.forEach((card) => {
		card.style.display = 'flex';
	});
});
