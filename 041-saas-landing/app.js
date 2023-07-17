const iconBtn = document.querySelector('.icon');
let navLinks = document.querySelector('.nav-links');

function hamburgerNavigation() {
	if (navLinks.style.display === 'flex') {
		navLinks.style.display = 'none';
	} else {
		navLinks.style.display = 'flex';
    iconBtn.style.display = 'none';
	}
}

iconBtn.addEventListener('click', hamburgerNavigation);
