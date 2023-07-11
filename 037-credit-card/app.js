const creditCardCircleCheck = document.getElementById(
	'creditcard-circle-check'
);
const payPalCircleCheck = document.getElementById('paypal-circle-check');

const selectCreditCard = document.getElementById('select-creditcard');
const selectPaypal = document.getElementById('select-paypal');

selectCreditCard.addEventListener('click', function () {
	creditCardCircleCheck.classList.add('fa-circle-check');
	creditCardCircleCheck.classList.remove('fa-circle');
});

selectPaypal.addEventListener('click', function () {
	payPalCircleCheck.classList.add('fa-circle-check');
	payPalCircleCheck.classList.remove('fa-circle');
});
