const openFormBtnEl = document.getElementById('open-form');
const closeFormBtnEl = document.querySelector('.btn[data-close]');
const formContainer = document.getElementById('form-container');
const form = document.querySelector('.form-control');

openFormBtnEl.addEventListener('click', () => {
	formContainer.style.display = 'flex';
	openFormBtnEl.style.display = 'none';
});

closeFormBtnEl.addEventListener('click', () => {
	formContainer.style.display = 'none';
	openFormBtnEl.style.display = 'inline-block';
});

form.addEventListener('click', (e) => {
	const eInput = document.getElementById('emailaddress');
	const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
});
