const btnElem = document.getElementById('btn');
const shareLink = document.getElementById('click-to-copy');
const btnText = document.getElementById('btn-text');

const copyToClipBoard = () => {
	navigator.clipboard.writeText(shareLink.textContent).then(() => {
		btnText.textContent = 'Copied!';
		btnText.style.color = 'var(--accent-900)';
		setTimeout(() => {
			btnText.textContent = 'Copy to clipboard';
			btnText.style.color = 'var(--primary-700)';
		}, 3000);
	});
};

btnElem.addEventListener('click', copyToClipBoard);
