const modalBtn = document.querySelector('.fa-xmark');
const modalCntr = document.querySelector('.container');
const showCookieBtn = document.getElementById('show-cookie');

modalBtn.addEventListener('click', function () {
	modalCntr.style.display = 'none';
	showCookieBtn.style.display = 'block';
});

showCookieBtn.addEventListener('click', function () {
	modalCntr.style.display = 'block';
	showCookieBtn.style.display = 'none';
});
