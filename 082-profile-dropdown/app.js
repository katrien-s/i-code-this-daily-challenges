const toggleCardBtn = document.getElementById('toggle-card');
const cardContainer = document.querySelector('.card-container');

toggleCardBtn.addEventListener('click', () => {
	cardContainer.classList.toggle('active');
});
