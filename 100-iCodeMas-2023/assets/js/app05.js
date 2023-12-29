document.getElementById('close-btn').addEventListener('click', function () {
	document.querySelector('.discount-coupon').style.display = 'none';
});

function updateCartCount(count) {
	document.getElementById('cart-count').textContent = count;
}

updateCartCount(2);
