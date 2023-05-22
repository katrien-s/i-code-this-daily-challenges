const closeModalXMarkElem = document.getElementById('close-modal');
const closeModalButtonElem = document.getElementById('close-modal-btn');
const openModalButtonElem = document.getElementById('open-modal-btn');
const container = document.querySelector('.container');

const closeModal = () => {
	openModalButtonElem.style.display = 'inline';
	container.style.display = 'none';
};

const openModal = () => {
	openModalButtonElem.style.display = 'none';
	container.style.display = 'flex';
};

closeModalXMarkElem.addEventListener('click', closeModal);
closeModalButtonElem.addEventListener('click', closeModal);
openModalButtonElem.addEventListener('click', openModal);
