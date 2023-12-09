const dropdownMenu = document.getElementById('custom-dropdown');
const selectedOption = document.querySelector('.selected-option');
const dropdownOptions = document.querySelector('.dropdown-options');
const dropdownOption = document.querySelectorAll('.dropdown-option');

dropdownMenu.addEventListener('click', toggleDropdown);

function toggleDropdown() {
	dropdownOptions.style.display =
		dropdownOptions.style.display === 'flex' ? 'none' : 'flex';
}

function selectOption(option) {
	var selectedText = document.querySelector('.selected-text');
	selectedText.textContent = option;
	toggleDropdown();
}

dropdownOption.forEach((option) => {
	option.addEventListener('click', function () {
		selectOption(option.textContent);
	});
});

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
	if (event.target !== dropdownMenu && !dropdownMenu.contains(event.target)) {
		dropdownOptions.style.display = 'none';
	}
};
