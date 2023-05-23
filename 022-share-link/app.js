const modalElem = document.getElementById('modal');
const closeModalElem = document.getElementById('close-modal');
const openModalElem = document.getElementById('open-modal');

const inputContainer = document.getElementById('input-container');
const shareButton = document.getElementById('share-button');

const closeModal = () => {
	openModalElem.style.display = 'block';
	modalElem.style.display = 'none';
};

const openModal = () => {
	openModalElem.style.display = 'none';
	modalElem.style.display = 'flex';
};

closeModalElem.addEventListener('click', closeModal);
openModalElem.addEventListener('click', openModal);

const updateInputContainer = () => {
	inputContainer.innerHTML = `
    <p class="clr-accent fs-italic">Thank you for your input. The selected links will be featured in next months' newsletter.</p>
    `;
};

shareButton.addEventListener('click', function (e) {
	e.preventDefault();
	updateInputContainer();
	setTimeout(() => {
		inputContainer.innerHTML = `
      <input type="url" placeholder="Eg. https://" id="user-input-url" name="user-input-url" required/>
			<button class="btn" id="share-button">Share</button>
    `;
	}, 3000);
});
