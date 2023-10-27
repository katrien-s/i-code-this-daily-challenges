const followBtn = document.querySelector('.btn[data-follow]');

followBtn.addEventListener('click', function () {
	followBtn.textContent = 'Followed';
	followBtn.classList.add('followed');
	followBtn.setAttribute('disabled');
});
