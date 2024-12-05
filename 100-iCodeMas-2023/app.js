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
