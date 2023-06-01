const modalCloseBtn = document.getElementById('modal-close-btn');
const modalOpenBtn = document.getElementById('modal-open-btn');
const modalElem = document.getElementById('modal');


modalCloseBtn.addEventListener('click', function () {
	modalElem.style.display = 'none';
  modalOpenBtn.style.display = 'block';
});

modalOpenBtn.addEventListener('click', function () {
	modalElem.style.display = 'block';
  modalOpenBtn.style.display = 'none';
});
