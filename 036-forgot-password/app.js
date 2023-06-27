const form = document.getElementById('form');
let emailAddressValidation = document.getElementById('email-address');
const resetBtn = document.getElementById('reset-btn');

let isValid = false;

function validateForm() {
	isValid = form.checkValidity();

	if (!isValid) {
    resetBtn.style.backgroundColor = 'red';
	} else {
    emailAddressValidation.value = '';
    resetBtn.textContent = 'Check your inbox';
    resetBtn.style.backgroundColor = 'limegreen';
    resetBtn.style.color = 'var(--clr-primary-900)';
	}
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
	validateForm();
});
