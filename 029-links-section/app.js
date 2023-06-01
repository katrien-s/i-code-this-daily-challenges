const closeModalBtn = document.getElementById('close-modal-btn');
const openModalBtn = document.getElementById('open-modal-btn');
const modalElement = document.getElementById('modal');

closeModalBtn.addEventListener('click', () => {
	modalElement.style.display = 'none';
	openModalBtn.style.display = 'block';
});

openModalBtn.addEventListener('click', () => {
	modalElement.style.display = 'block';
	openModalBtn.style.display = 'none';
});
