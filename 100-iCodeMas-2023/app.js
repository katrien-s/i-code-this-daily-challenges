import { products } from './products.js';

// Countdown
const countdownInterval = setInterval(countdownDays, 1000);

function countdownDays() {
	let today = new Date();
	let christmasYear = today.getFullYear();

	const targetDate = new Date(christmasYear, 11, 25);
	const timeDifference = targetDate - today;

	const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
	const hours = Math.floor(
		(timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

	document.getElementById('days').textContent = days;
	document.getElementById('hours').textContent = hours;
	document.getElementById('minutes').textContent = minutes;
	document.getElementById('seconds').textContent = seconds;
}

// Coupon
document.getElementById('close-btn').addEventListener('click', function () {
	document.querySelector('.discount-coupon').style.display = 'none';
});

// Update Cart
function updateCartCount(count) {
	document.getElementById('cart-count').textContent = count;
}

updateCartCount(2);

// Filter Selection Custom Dropdown

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