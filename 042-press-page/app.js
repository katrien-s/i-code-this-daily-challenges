const toggleHamburgerBtn = document.getElementById('toggle');

function toggleHamburger() {
	let navLinks = document.querySelector('.nav-links');
	if (navLinks.style.display === 'flex') {
		navLinks.style.display = 'none';
		toggleHamburgerBtn.classList.remove('fa-solid', 'fa-x');
	} else {
		navLinks.style.display = 'flex';
		toggleHamburgerBtn.classList.add('fa-solid', 'fa-x');
	}
}

toggleHamburgerBtn.addEventListener('click', toggleHamburger);
